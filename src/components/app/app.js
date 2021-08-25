import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage} from '../pages';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const ToggleRandomButton = styled.button`
        width: 319px;
        height: 40px;
        margin-bottom: 20px;
        background: rgb(4,17,68);
        border: none;
        color: white;
        &:focus{
            border: none;
        }
`

export default class App extends React.Component {
    gotService = new gotService();
    constructor(props) {
        super(props);
        this.state = {
            randomChar: true,
            selectedChar: 130,
            error: false
        }
        this.hiddenRandomChar = this.hiddenRandomChar.bind(this);
    }
    componentDidCatch() {
        this.setState({
            error:true
        })
    }
    hiddenRandomChar(){
       this.setState((state) => {
           return {
            randomChar: !state.randomChar
           }
       });
    }

    render() {
        const {randomChar} = this.state;
        const randomCharacter = randomChar ?  <RandomChar/> : null;


        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
           <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomCharacter}
                                <ToggleRandomButton onClick={this.hiddenRandomChar}> Toggle random character</ToggleRandomButton>
                            </Col>
                        </Row>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' component={BooksPage}/>
                        <Route path='/houses' component={HousesPage}/>
                    </Container>
                </div>
           </Router>
        );
    }
};

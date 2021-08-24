import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';

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
    constructor(props) {
        super(props);
        this.state = {
            randomChar: true
        }
        this.hiddenRandomChar = this.hiddenRandomChar.bind(this);
    }
    hiddenRandomChar(){
        let status = this.state.randomChar;
       this.setState({
           randomChar: !status
       })
    }
    render() {
        const {randomChar} = this.state;
        const randomCharacter = randomChar ?  <RandomChar/> : null;
        return (
            <> 
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
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

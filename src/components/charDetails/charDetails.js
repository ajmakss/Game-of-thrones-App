import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import gotService from '../../services/gotService';

const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}
const CharDetail = styled.div `
background-color: #fff;
padding: 25px 25px 15px 25px;
margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    .select-error {
        color: #fff;
        text-align: center;
        font-size: 26px;
    }
`;
export {Field}
export default class CharDetails extends Component {
    
    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }
    updateChar() {
        const {charId} = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharacter(charId)
        .then(char => {
            this.setState({char})
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }
    render() {

        if (!this.state.char) {
            return <span className="select-error"> Please select a character</span>
        }
        const {char} = this.state
        const {name} = char;
        return (
            <CharDetail>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                   {
                       React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                       })
                    }
                </ul>
            </CharDetail>
        );
    }
}
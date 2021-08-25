import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import gotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}
const ItemDetail = styled.div `
background-color: #fff;
padding: 25px 25px 15px 25px;
margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const SelectError = styled.span`
    background: white;
    border-radius: 3%;
    background: white;
    width: 200px;
    height: 40px;
    display: block;
    text-align: center;
    padding-top: 7px;
    font-weight: 400;

`
export {Field}
export default class ItemDetails extends Component {
    
    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }
    updateItem() {
        const {itemId, getDetail} = this.props;

        if(!itemId) {
            return;
        }

        getDetail(itemId)
        .then(item => {
            this.setState({item})
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }
    render() {

        if (!this.state.item) {
            return <SelectError> Please select an item</SelectError>
        }
        const {item} = this.state
        const {name} = item;
        return (
            <ItemDetail>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                   {
                       React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                       })
                    }
                </ul>
            </ItemDetail>
        );
    }
}
import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ListItem = styled.ul`
    li {
        cursor: pointer;
    }
`;
export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
        }

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <li 
                    key={item.id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(item.id)}
                    >
                    {item.name}
                </li>
            )
        });
    }
    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }
        const items = this.renderItems(itemList);
        return (
            <ListItem className="list-group">
                {items}
            </ListItem>
        );
    }
}
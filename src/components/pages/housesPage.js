import React from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';




export default class HousesPage extends React.Component {
    gotService = new gotService();
    state = {
        selected: 2,
        error: false
    }

    
    componentDidCatch() {
        this.setState({
            error:true
        })
    }
    onItemSelected = (id) => {
        id++;
        this.setState({
            selected: id
        });
    }

   render() {

    if(this.state.error) {
        return <ErrorMessage/>
    }
    const itemList = (
        <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses} 
        />
    )

    const itemDetails = (
        <CharDetails itemId={this.state.selected}
                        getDetail={this.gotService.getHouse}> 
            <Field field='name' label='Name'/>
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
        </CharDetails>
    )

    return (
         <RowBlock left={itemList} right={itemDetails}/>
    )
    
}}
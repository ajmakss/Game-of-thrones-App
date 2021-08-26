import React from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';




export default class BooksPage extends React.Component {
    gotService = new gotService();
    state = {
        selected: null,
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
            getData={this.gotService.getAllBooks} 
        />
    )

    const itemDetails = (
        <CharDetails itemId={this.state.selected}
                        getDetail={this.gotService.getBook}> 
            <Field field='name' label='Name'/>
            <Field field='numberOfPages' label='Number Of Pages'/>
            <Field field='publiser' label='Publiser'/>
            <Field field='released' label='Released'/>
        </CharDetails>
    )

    return (
         <RowBlock left={itemList} right={itemDetails}/>
    )
    
}}
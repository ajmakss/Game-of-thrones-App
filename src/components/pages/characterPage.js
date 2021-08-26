import React from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';




export default class CharacterPage extends React.Component {
    gotService = new gotService();
    state = {
        selected: 0,
        error: false
    }

    
    componentDidCatch() {
        this.setState({
            error:true
        })
    }
    onItemSelected = (id) => {
        console.log(id);
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
            getData={this.gotService.getAllCharacters} 
        />
    )

    const itemDetails = (
        <CharDetails itemId={this.state.selected}
                        getDetail={this.gotService.getCharacter}> 
            <Field field='gender' label='Gender'/>
            <Field field='born' label='Born'/>
            <Field field='died' label='Died'/>
            <Field field='culture' label='Culture'/>
        </CharDetails>
    )

    return (
         <RowBlock left={itemList} right={itemDetails}/>
    )
    
}}
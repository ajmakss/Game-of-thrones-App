import { region } from "caniuse-lite";
import { words } from "lodash";

 export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    async getAllCharacters() {
        const result = await this.getResourse('/characters?page5&pageSize=10');
        return result.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks(){
        return this.getResourse(`/books`);
    }
    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }

    getAllHouses(){
        return this.getResourse(`/houses`);
    }
    getHouse(id) {
        return this.getResourse(`/houses/${id}`);
    }

    _transformCharacter(char) {
        return {
            name: char.name || 'secret',
            gender: char.gender || 'secret',
            born: char.born || 'secret',
            died: char.died || 'secret',
            culture: char.culture || 'secret'
        }
    }
    _transformHouse(house){
        return {
            name: house.name ,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}
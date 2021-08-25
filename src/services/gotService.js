import { region } from "caniuse-lite";
import { words } from "lodash";

 export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

     getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const result = await this.getResourse('/characters?page=5&pageSize=10"');
        return result.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async () =>{
        const res = await this.getResourse(`/books/`);
        return res.map(this._transformBook)
    }
    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async () =>{
        const res = await this.getResourse(`/houses`);
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter = (char, i) => {
        return {
            name: char.name || 'secret',
            gender: char.gender || 'secret',
            born: char.born || 'secret',
            died: char.died || 'secret',
            culture: char.culture || 'secret',
            id: i + 41
        }
    }
    _transformHouse = (house) =>{
        return {
            name: house.name ,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}
class GotService {

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

    getAllCharacters() {
        return this.getResourse('/characters?page5&pageSize=10');
    }
    getCharacter(id) {
        return this.getResourse(`/characters/${id}`);
    }

}

const got = new GotService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item =>  console.log(item.aliases[0]));
    });

got.getCharacter(130)
    .then(res => console.log(res));
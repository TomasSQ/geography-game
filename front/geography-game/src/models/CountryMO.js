import uuidv4 from './localStorage'

export default class CountryMO {

    constructor({ name, completed }) {
        this.id = uuidv4()
        this.name = name
        this.completed = !!completed
    }

    static findAll() {
        return localStorage.getObjects('countries')
    }

    static add(country) {
        return localStorage.addToObjects('countries', country)
    }

    static update(countries) {
        localStorage.setObject('countries', countries)
    }
}

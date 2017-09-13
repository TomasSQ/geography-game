import uuidv4 from './localStorage'

const countries = [
    {name: "Brazil", capital: "Brasília"},
    {name: "França", capital: "Paris"},
    {name: "Alemanha", capital: "Berlim"},
    {name: "Hungria", capital: "Budapeste"},
    {name: "Inglaterra", capital: "Londres"}
]

const initAll = () => {
    countries.forEach( country => {
        CountryMO.add(new CountryMO(country))
    })
    return CountryMO.findAll()
}

export default class CountryMO {

    constructor({ name, capital, completed }) {
        this.id = uuidv4()
        this.name = name
        this.capital = capital
        this.completed = !!completed
    }

    static findAll() {
        const foundCountries = localStorage.getObjects('countries')
        return foundCountries.length !== countries.length ? initAll() : foundCountries
    }

    static add(country) {
        return localStorage.addToObjects('countries', country)
    }

    static update(countries) {
        localStorage.setObject('countries', countries)
    }
}

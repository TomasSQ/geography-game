import uuidv4 from './localStorage'

const countries = [
    {name: "Brazil", capital: "Brasília"},
    {name: "França", capital: "Paris"},
    {name: "Alemanha", capital: "Berlim"},
    {name: "Hungria", capital: "Budapeste"},
    {name: "Inglaterra", capital: "Londres"}
]

const initAll = () => {
    _countries = []
    countries.forEach( country => {
        CountryMO.add(new CountryMO(country))
    })
    return CountryMO.findAll()
}

let _countries

export default class CountryMO {

    constructor({ name, capital, completed }) {
        this.id = uuidv4()
        this.name = name
        this.capital = capital
        this.completed = !!completed
    }

    static findAll() {
        _countries = _countries || initAll()
        return _countries
        //const foundCountries = localStorage.getObjects('countries')
        //return foundCountries.length !== countries.length ? initAll() : foundCountries
    }

    static add(country) {
        _countries.push(country)
        //return localStorage.addToObjects('countries', country)
    }

    static complete(id) {
        let countries = CountryMO.findAll()
        let country = countries.filter(c => c.id === id)
        country = country[0] || {}
        country.completed = true
        //localStorage.setObject('countries', countries)
    }
}

import CountryMO from '../models/CountryMO'

const countries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            const country = new CountryMO(action)
            CountryMO.add(country)
            break
        case 'TOGGLE_COUNTRY':
            const newState = state.map(country =>
                country.id === action.id ? {...country, completed: !country.completed} : country
            )
            CountryMO.update(newState)
            break
        case 'UPDATE_PONTUATION':
            break
        default:
            break
    }
    state.countries = CountryMO.findAll()
    return state.countries
}

export default countries

import CountryMO from '../models/CountryMO'

const countries = (state = [], action) => {
    switch (action.type) {
        case 'CHOOSED_ANSWER':
            CountryMO.complete(action.id)
            return CountryMO.findAll()
        default:
            return state
    }
}

export default countries

import CountryMO from '../models/CountryMO'

const countries = (state = [], action) => {
    switch (action.type) {
        case 'CHOOSED_ANSWER':
            return CountryMO.findAll()
        default:
            return state
    }
}

export default countries

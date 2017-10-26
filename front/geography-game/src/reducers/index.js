import { combineReducers } from 'redux'
import countries from './countries'
import pontuation from './pontuation'

const countryApp = combineReducers({
    countries,
    pontuation
})

export default countryApp

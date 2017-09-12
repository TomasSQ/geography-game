import { combineReducers } from 'redux'
import countries from './countries'
import visibilityFilter from './visibilityFilter'

const countryApp = combineReducers({
    countries,
    visibilityFilter
})

export default countryApp

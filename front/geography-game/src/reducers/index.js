import { combineReducers } from 'redux'
import countries from './countries'
import pontuation from './pontuation'
import visibilityFilter from './visibilityFilter'

const countryApp = combineReducers({
    countries,
    pontuation,
    visibilityFilter
})

export default countryApp

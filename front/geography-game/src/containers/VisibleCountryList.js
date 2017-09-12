import { connect } from 'react-redux'
import { toggleCountry } from '../actions'
import CountryList from '../components/CountryList'

const getVisibleContries = (countries, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return countries
        case 'SHOW_COMPLETED':
            return countries.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return countries.filter(t => !t.completed)
        default:
            return countries
    }
}

const mapStateToProps = state => {
    return {
        countries: getVisibleContries(state.countries, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCountryClick: id => {
            dispatch(toggleCountry(id))
        }
    }
}

const VisibleCountryList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CountryList)

export default VisibleCountryList

import React from 'react'
import PropTypes from 'prop-types'
import Country from './Country'

const CountryList = ({ countries, onCountryClick }) => (
    <ul>
        {countries.map((country, i) => (
            <Country key={i} {...country} onClick={() => onCountryClick(country.id)} />
        ))}
    </ul>
)

CountryList.propTypes = {
    countries: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
    onCountryClick: PropTypes.func.isRequired
}

export default CountryList

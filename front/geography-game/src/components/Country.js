import React from 'react'
import PropTypes from 'prop-types'

const Country = ({ onClick, completed, name }) => (
    <li onClick={onClick} style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}>
        {name}
    </li>
)

Country.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default Country

import React from 'react'
import PropTypes from 'prop-types'

const Pontuation = ({right, total}) => (
    <p className="pontination">
        {right} / {total}
    </p>
)

Pontuation.propTypes = {
    right: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default Pontuation

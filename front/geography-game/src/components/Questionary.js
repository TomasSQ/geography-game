import React from 'react'
import PropTypes from 'prop-types'

const Questionary = ({ question, alternatives, onCountryClick }) => (
    <div>
        <h2>{question.text}</h2>
        <ul className="alternatives">
        {alternatives.map((alternative, i) => (
            <li className="alternative" key={i} onClick={() =>
                onCountryClick(alternative.id, question.id === alternative.id)
            } >
                {alternative.text}
                </li>
        ))}
        </ul>
    </div>
)

const item = PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}).isRequired

Questionary.propTypes = {
    question: item,
    alternatives: PropTypes.arrayOf(item),
    onCountryClick: PropTypes.func.isRequired
}

export default Questionary

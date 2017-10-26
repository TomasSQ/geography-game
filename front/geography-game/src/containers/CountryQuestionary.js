import { connect } from 'react-redux'
import { choosedAnswer } from '../actions'
import Questionary from '../components/Questionary'

const shuffleArray = (array) => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array;
}

const getRandomCountry = (countries) => {
    let tries = 0
    let c
    do {
        c = countries[parseInt(Math.random() * countries.length, 10)]
    } while (c.completed && tries++ !== countries.length)

    return c
}

const getRandomAlternatives = (countries, country) => {
    let randomCountries = shuffleArray(countries).slice(0, 5).filter( c => c.id !== country.id)

    let alternatives = [{id: country.id, text: country.name}]
    randomCountries.forEach(c => alternatives.push({id: c.id, text: c.name}))
    alternatives = shuffleArray(alternatives)
    return alternatives
}

const mapStateToProps = state => {
    let c = getRandomCountry(state.countries)
    return {
        question: {id: c.id, text: c.capital},
        alternatives: getRandomAlternatives(state.countries, c)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCountryClick: (id, isCorrect) => {
            dispatch(choosedAnswer(id, isCorrect))
        }
    }
}

const CountryQuestionary = connect(
    mapStateToProps,
    mapDispatchToProps
)(Questionary)

export default CountryQuestionary

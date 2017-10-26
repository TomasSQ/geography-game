import { connect } from 'react-redux'
import Pontuation from '../components/Pontuation'

const mapStateToProps = (state) => {
    return {
        right: state.pontuation.right || 0,
        wrong: state.pontuation.wrong || 0,
        total: state.countries.length || 0,
    }
}

const PontuationQuestionary = connect(
    mapStateToProps
)(Pontuation)

export default PontuationQuestionary

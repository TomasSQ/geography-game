import React from 'react'
import CountryQuestionary from '../containers/CountryQuestionary'
import PontuationQuestionary from '../containers/PontuationQuestionary'

const App = () => (
    <div>
        <h1>Geography Game</h1>
        <PontuationQuestionary />
        <CountryQuestionary />
    </div>
)

export default App

import React from 'react'
import AvailableFilters from './AvailableFilters'
import AddCountry from '../containers/AddCountry'
import VisibleCountryList from '../containers/VisibleCountryList'

const App = () => (
    <div>
        <h1>Geography Game</h1>
        <AddCountry />
        <AvailableFilters />
        <VisibleCountryList />
    </div>
)

export default App

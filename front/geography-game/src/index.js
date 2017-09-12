import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import countryApp from './reducers'
import App from './components/App'
import CountryMO from './models/CountryMO'

import './index.css'
import './models/localStorage.js'

let store = createStore(countryApp, { countries: CountryMO.findAll()})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

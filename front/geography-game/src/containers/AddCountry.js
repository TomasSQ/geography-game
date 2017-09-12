import React from 'react'
import { connect } from 'react-redux'
import { addCountry } from '../actions'

let AddCountry = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addCountry(input.value))
                input.value = ''
            }}>
                <input ref={node => { input = node }}/>
                <button type="submit">
                    Add Country
                </button>
            </form>
        </div>
    )
}

AddCountry = connect()(AddCountry)

export default AddCountry

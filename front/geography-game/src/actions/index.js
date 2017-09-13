export const addCountry = name => {
    return {
        type: 'ADD_COUNTRY',
        name
  }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
  }
}

export const toggleCountry = id => {
    return {
        type: 'TOGGLE_COUNTRY',
        id
    }
}

export const selectCountry = isCorrect => {
    return {
        type: 'UPDATE_PONTUATION'
    }
}

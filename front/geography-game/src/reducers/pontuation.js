const pontuation = (state = {}, action) => {
    switch (action.type) {
        case 'CHOOSED_ANSWER':
            const wrong = (state.wrong || 0) + (action.isCorrect ? 0 : 1)
            const right = (state.right || 0) + (action.isCorrect ? 1 : 0)
            return Object.assign({}, state, {right, wrong})
        default:
            return state
    }
}

export default pontuation

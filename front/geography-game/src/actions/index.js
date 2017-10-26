export const choosedAnswer = (id, isCorrect) => {
    return {
        type: 'CHOOSED_ANSWER',
        isCorrect,
        id
    }
}

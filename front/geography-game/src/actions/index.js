export const choosedAnswer = isCorrect => {
    return {
        type: 'CHOOSED_ANSWER',
        isCorrect
    }
}

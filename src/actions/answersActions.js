export const initialiseAnswers = () => {
    return {
        type:'initialiseAnswers'
    }
}

export const answerForQuestion = (index, value) => {
    return {
        type:'answerForQuestion',
        index:index,
        value:value
    }
}
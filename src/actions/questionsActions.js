export const setLevelAction = (level) => {
    return {
        type:'changeLevel',
        level:level
    }
}

export const getQuestion = (questionNumber) => {
    return {
        type:'getQuestion',
        questionNumber:questionNumber
    }
}
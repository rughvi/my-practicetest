import levels from '../consts/levels';
import {questionsEasy, questionsMedium, questionsHard} from '../consts/questions';

const initialState = {
    currentLevel:levels.level0,
    answers:[]
}

export default answersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'changeLevel':
            state = {...state, currentLevel : action.level}
            break;
        case 'initialiseAnswers':
            answers = initialise(state.currentLevel);
            state = {...state, answers:answers};
            break;
        case 'answerForQuestion':
            answer = state.answers[action.index];
            answer.actual = action.value;
            break;
        default:
            break;
    }
    return state;
}

initialise = (level) => {
    answers=[];
    question=[];
    switch(level){
    case levels.level0:        
        questions = questionsEasy;
        break;
    case levels.level1:
        questions = questionsMedium;
        break;
    case levels.level2:
        questions = questionsHard;
        break;
    }

    questions.forEach(question => {
        answers.push({
            index: question.index,
            expected:question.expected,
            actual:0
        })
    });

    return answers;
}
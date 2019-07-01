import levels from '../consts/levels';
import {questionsEasy, questionsMedium, questionsHard} from '../consts/questions';

const initialState = {
    currentLevel:levels.level0,
    currentQuestion:{
        currentQuestionNumber:0,
        question:'',
        answers:{first:'', second:'', third:'', fourth:''},
        time:0
    }
}

export default questionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'changeLevel':
            state = {...state, currentLevel : action.level}
            break;
        case 'getQuestion':
            var currentQuestion = getCurrentQuestion(state.currentLevel, action.questionNumber)
            var totalQuestions = getTotalQuestions(state.currentLevel)
            state = 
            {
                ...state, 
                currentQuestion: currentQuestion,
                totalQuestions:totalQuestions
            }
            break;
    }
    return state;
}

getCurrentQuestion = (level, questionNumber) => {
    var questions=[];
    switch(level){
        case levels.level0:
            questions = questionsEasy
            break;
        case levels.level1:
            questions = questionsMedium
            break;
        case levels.level2:
            questions = questionsHard
            break;
    }

    var question = '';
    var time = 0;
    var answers = {
        first:'',
        second:'',
        third:'',
        fourth:''
    }

    if(questions.length >= questionNumber-1){
        question = questions[questionNumber-1].question;
        time = questions[questionNumber-1].time;
        answers = questions[questionNumber-1].answers;
    }
    
    return {
        currentQuestionNumber : questionNumber,
        question:question,
        answers:answers,
        time:time
    }
}

getTotalQuestions = (level) =>{
    switch(level){
        case levels.level0:
            return questionsEasy.length;
            break;
        case levels.level1:
            return questionsMedium.length;
            break;
        case levels.level2:
            return questionsHard.length;
            break;
            default:
                return 0;
            break;
    }
}
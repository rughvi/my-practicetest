import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import MainComponent from '../components/mainComponent';
import QuestionComponent from '../components/questionComponent';
import ResultsComponent from '../components/resultsComponent';
import SubmitComponent from '../components/submitComponent';

const MainNavigator = createSwitchNavigator({
    Main: {
        screen:MainComponent
    },
    Question:{
        screen : QuestionComponent
    },
    Results:{
        screen:ResultsComponent
    },
    Submit:{
        screen:SubmitComponent
    }
});


const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
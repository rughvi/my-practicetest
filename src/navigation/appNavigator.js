import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import MainComponent from '../components/mainComponent';
import QuestionComponent from '../components/questionComponent';

const MainNavigator = createSwitchNavigator({
    Main: {
        screen:MainComponent
    },
    Question:{
        screen : QuestionComponent
    }    
});


const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
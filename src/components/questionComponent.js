import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getQuestion} from '../actions/questionsActions';
import {initialiseAnswers,answerForQuestion} from '../actions/answersActions';
import circularProgress from './circularProgressComponent';
import CircularProgress from './circularProgressComponent';

class QuestionComponent extends Component{
    componentDidMount(){
        this.props.initialiseAnswers();
        this.props.getQuestion(1);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.currentQuestion.currentQuestionNumber <= 0){
            return;
        }
        this.startTimer(nextProps.currentQuestion.time)
    }

    startTimer(time){
        this.percent = 100;
        this.remaining = time;
        this.percentChange = (this.percent / this.remaining);
        this.intervalId = setInterval(() => {
            this.percent -= 1 * this.percentChange;
            this.remaining -= 1;
            if(this.percent >= 0){
                this.setState({percent:this.percent, remaining:this.remaining});
            }else{
                this.setState({percent:0, remaining:0});
                clearInterval(this.intervalId);
                this.getNextQuestion();
            }
        }, 1000);
    }

    state = {
        percent:0
    }

    getNextQuestion(){
        if(this.props.currentQuestion.currentQuestionNumber < this.props.totalQuestions){
            this.props.getQuestion(this.props.currentQuestion.currentQuestionNumber + 1);
        }
        else {
            //show end screen
        }
    }

    render(){
        return(
            <View style={styles.root}>
                <View style={styles.header}>                    
                    <Text style={{fontWeight:'bold', fontSize:20}}>{this.props.currentQuestion.currentQuestionNumber} of {this.props.totalQuestions}</Text>
                    <Text style={{fontSize:15, fontStyle:'italic', color:'#88d1f1'}}>{this.props.currentLevel}</Text>                    
                </View>
                <Text style={styles.question} onChangeText={(text) => startTimer()}>{this.props.currentQuestion.question}</Text>
                <View style={styles.answers}>
                    <TouchableOpacity>
                        <Text style={[styles.answer]}> {this.props.currentQuestion.answers.first}</Text>
                    </TouchableOpacity>
                    
                    <Text style={[styles.answer]}> {this.props.currentQuestion.answers.second}</Text>
                    <Text style={[styles.answer]}> {this.props.currentQuestion.answers.third}</Text>
                    <Text style={[styles.answer]}> {this.props.currentQuestion.answers.fourth}</Text>
                </View>
                <View style={styles.footer}>
                    <CircularProgress percent={this.state.percent} remaining={this.state.remaining} style={styles.progress}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    header:{
        flex:1,
        width:'100%',
        marginTop:50,
        height:100,
        borderBottomColor: '#88d1f1',
        borderBottomWidth: 2,
        alignItems:'center',
        justifyContent:'space-around'
    },
    question:{
        flex:4,
        fontSize:20,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    answers:{
        flex:4,
        paddingTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        alignItems:'center'
    },
    answer:{
        margin:5,
        height:50,
        width:150,
        borderColor:'#88d1f1',
        borderWidth:1,
        padding:10,
        fontSize:20
    },
    answer1:{
        position:'absolute',
        bottom:60,
        left:0
    },
    answer2:{
        position:'absolute',
        bottom:60,
        right:0
    },
    answer3:{
        position:'absolute',
        bottom:0,
        left:0
    },
    answer4:{
        position:'absolute',
        bottom:0,
        right:0
    },
    footer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        borderTopColor:'#88d1f1',
        borderTopWidth: 2,
    },
    progress:{
        position:'relative',
        right:20
    }
})

const mapStateToProps = (state) =>{
    return {
        currentLevel: state.questions.currentLevel,
        currentQuestion: state.questions.currentQuestion,
        totalQuestions:state.questions.totalQuestions
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getQuestion:(questionNumber) => {dispatch(getQuestion(questionNumber))},
        initialiseAnswers: () => {dispatch(initialiseAnswers())},
        setAnswer:(questionNumber, answerIndex) => {dispatch(answerForQuestion(questionNumber, answerIndex))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);

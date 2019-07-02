import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import CircularProgress from './circularProgressComponent';

class ResultsComponent extends Component{
    render(){
        answersCount = 0;
        this.props.answers.forEach(answer => {
            if(answer.expected === answer.actual){
                answersCount++;
            }
        });

        percent = (answersCount * 100) / this.props.totalQuestions;
        return(
            <View style={styles.root}>
                <Text style={styles.scoreDescription}>Your Score</Text>
                <CircularProgress percent={percent} remaining={answersCount + '/' + this.props.totalQuestions} w={100} h={100} fs={25}/>
                <TouchableOpacity style={styles.button}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    scoreDescription:{
        fontSize : 25,
        margin:50
    },
    button:{
        alignItems:'center',
        backgroundColor:'#027dff',
        padding:10,
        width:200,
        margin:50
    }
})

const mapStateToProps = (state) => {
    return {
        totalQuestions:state.questions.totalQuestions,
        answers: state.answers.answers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent)
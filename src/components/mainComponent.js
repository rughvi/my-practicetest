import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Switch} from 'react-native';
import {setLevelAction} from '../actions/questionsActions';
import levels from '../consts/levels';

class MainComponent extends Component{
    state = {
        isBusy : false
    }

    render(){
        return(
            <View style={styles.root}>
            {
                this.state.isBusy == false && 
                <View style={styles.root}>
                    
                    <Text style={{fontSize:20}}>Select difficult level</Text>
                    <View>
                        <TouchableOpacity style={[styles.levelButton, (this.props.currentLevel ==levels.level0?styles.currentLevelButton: styles.levelButton)]}
                            onPress={() => this.props.changeLevel(levels.level0)}>
                            <Text style={styles.buttonTitle}>{levels.level0}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.levelButton, (this.props.currentLevel ==levels.level1?styles.currentLevelButton: styles.levelButton)]}
                            onPress={() => this.props.changeLevel(levels.level1)}>
                            <Text style={styles.buttonTitle}>{levels.level1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.levelButton, (this.props.currentLevel ==levels.level2?styles.currentLevelButton: styles.levelButton)]}
                            onPress={() => this.props.changeLevel(levels.level2)}>
                            <Text style={styles.buttonTitle}>{levels.level2}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.info}>You have to select answer before timer elapses for each question.</Text>
                    <Text style={[styles.info, {fontWeight:'normal'}]}>Please tick the box below {"\n"} to agree that answering is time restricted {"\n"} to enable start button.</Text>
                    <Switch value={this.state.checked} onValueChange={() => this.setState({checked: !this.state.checked})}></Switch>
                    <TouchableOpacity style={this.state.checked?styles.button:[styles.button,styles.buttonInactive]}
                            onPress={() => { (this.state.checked == true) && this.props.navigation.navigate('Question')}}>
                        <Text style={styles.buttonTitle}>START</Text>
                    </TouchableOpacity>
                </View>            
            }
            {
                this.state.isBusy == true && 
                <View style={styles.root}>
                    <Text style={{margin:20}}>Preparing...</Text>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    button:{
        alignItems:'center',
        backgroundColor:'#027dff',
        padding:10,
        width:200,
        margin:50
    },
    buttonInactive:{
        backgroundColor:'silver'
    },
    buttonTitle :{
        fontSize:20
    },
    levelButton:{
        margin:20,
        width:200,
        alignItems:'center',
        borderColor:'#88d1f1',
        borderWidth:1,
        padding:10
    },
    currentLevelButton:{
        backgroundColor:'#88d1f1'
    },
    info:{
        fontSize:20, 
        fontWeight:'bold', 
        textAlign:'center',
        margin:10
    }
});

const mapStateToProps = (state) => {
    return {
        currentLevel:state.questions.currentLevel
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLevel : (level) => {dispatch(setLevelAction(level))},
        setQuestions: (level) => {dispatch(setQuestions(level))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
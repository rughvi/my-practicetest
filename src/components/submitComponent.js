import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class SubmitComponent extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={[styles.fieldLabel, {alignSelf:'center'}]}>Your Details</Text>
                <Text style={{textAlign:'center'}}>Please provide your details below</Text>                
                <Text style={styles.fieldLabel}>Name</Text>
                <TextInput keyboardType='name-phone-pad' placeholder='Enter your name' style={styles.textInput}></TextInput>
                <Text style={styles.fieldLabel}>Email</Text>
                <TextInput keyboardType='email-address' placeholder='Email address' style={styles.textInput}></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Submit')}>
                    <Text style={styles.buttonTitle}>Confirm</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    fieldLabel:{
        fontSize:18,
        alignSelf:'flex-start',
        marginBottom:5
    },
    textInput:{
        backgroundColor:'#c0c0c0', 
        alignSelf:'stretch', 
        height:40,
        fontSize:18,
        marginBottom:20
    },
    button:{
        alignItems:'center',
        backgroundColor:'#027dff',
        padding:10,
        width:200,
        margin:50
    },
    buttonTitle :{
        fontSize:20
    }
})

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitComponent)
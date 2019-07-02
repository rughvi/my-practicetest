import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
/**
* Override styles that get passed from props
**/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + (percent * 3.6);
  return {
    transform:[{rotateZ: `${rotateBy}deg`}]
  };
}

renderThirdLayer = (percent, w, h) => {
    borderR = w / 2;
    if(percent > 50){
      /**
      * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
      * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
      * before passing to the propStyle function
      **/
      return <View style={[styles.secondProgressLayer,propStyle((percent - 50), 45), {width:w, height:h, borderRadius: borderR} ]}></View>
    }else{
      return <View style={[styles.offsetLayer, {width:w, height:h, borderRadius: borderR}]}></View>
    }
  }

  class CircularProgress extends Component {
    render(){
      percent = this.props.percent;
      remaining = this.props.remaining;
      let firstProgressLayerStyle;
      if(percent > 50){
        firstProgressLayerStyle = propStyle(50, -135);
      }else {
        progressColor='#3498db';
        if(percent <= 25){
          progressColor = '#ff3d00';
        }
        else if(percent <= 50) {
          progressColor = '#ff7f00';
        }
        firstProgressLayerStyle = propStyle(percent, -135);

        firstProgressLayerStyle = {
          ...firstProgressLayerStyle,
          borderRightColor: progressColor,
          borderTopColor: progressColor
        }
      }
      borderR = this.props.w / 2;
      return(
        <View style={[styles.container, {width:this.props.w, height:this.props.h, borderRadius: borderR}]}>
          <View style={[styles.firstProgressLayer, firstProgressLayerStyle, {width:this.props.w, height:this.props.h, borderRadius: borderR}]}></View>
          {renderThirdLayer(percent, this.props.w, this.props.h)}
          <Text style={[styles.display, {fontSize:this.props.fs}]}>{remaining}</Text>
        </View>
      );
    }    
  }

  const styles = StyleSheet.create({
    container: {      
      borderWidth: 5,
      borderColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center'
    },
    firstProgressLayer: {
      borderWidth: 5,
      position: 'absolute',
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: '#3498db',
      borderTopColor: '#3498db',
      transform:[{rotateZ: '-135deg'}]
    },
    secondProgressLayer:{
      position: 'absolute',
      borderWidth: 5,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: '#3498db',
      borderTopColor: '#3498db',
      transform: [{rotateZ: '45deg'}]
    },
    offsetLayer: {
      position: 'absolute',
      borderWidth: 5,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: 'grey',
      borderTopColor: 'grey',
      transform:[{rotateZ: '-135deg'}]
    },
    display: {
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold'
      }
  });

  export default CircularProgress;  
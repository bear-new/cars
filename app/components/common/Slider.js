import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider,
} from 'react-native';

//简单封装一个组件
export default class SliderExample extends React.Component{  
  
  constructor(props) {
    super(props);
    this.state = {
      value: 0,   
    };
  }

  render() {  
    return (  
      <View>  
        <Text style={styles.text}>  
          {this.state.value && +this.state.value.toFixed(3)}  
        </Text>  
        <Slider  
          {...this.props}  
          onValueChange={(value) => this.setState({value: value})} />  
      </View>  
      );  
  }  
}; 

const styles = StyleSheet.create({
  text: {
  }
})
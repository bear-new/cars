import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  DatePickerAndroid,
} from 'react-native';

//简单封装一个组件
export default class DatePicker extends React.Component{  
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      simpleText: '选择日期,默认今天',
    };
  }

  //进行创建时间日期选择器
  async showPicker(options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);      
      if (action === DatePickerAndroid.dismissedAction) {
        newState['simpleText'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState['simpleText'] = date.toLocaleDateString();
        newState['date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error: `, message);
    }
  }

  render() {  
    return (  
      <TouchableHighlight
        style={{paddingTop: 18}}
        underlayColor="#a5a5a5"
        onPress={this.showPicker.bind(this, {date: this.state.date})}>
        <Text style={styles.buttonText}>{this.state.simpleText}</Text>
      </TouchableHighlight>
    );  
  }  
}; 

const styles = StyleSheet.create({
  buttonText: {
  }
})
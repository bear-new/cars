import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  Button,
  Image,
  View,
  TextInput,
  Slider,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
/* constants */
import * as config from '../../constants/Config';
import FetchRequest from '../../constants/FetchRequest';
/* components */
import SegmentedControl from '../../components/header/SegmentedControl';
import DatePicker from '../../components/common/DatePicker';
import SliderExample from '../../components/common/Slider';
/* lib */

export default class Evaluate extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      text: '',
      carsList: [],
      slideCompletionValue: 0,  
      slideCompletionCount: 0,  
    };
  }

  componentWillMount(){
    
  }

  evaluate() {
    let number = Math.random()*100;
    let money = number.toFixed(2) + '万元';
    Alert.alert(
      '提示',
      `价值${money}`,
      [
        {text: '确定', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    let { carsList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.tip}>
          <Image source={require('../../assets/images/evaluate.png')} style={{width: 360,height: 80}} resizeMode="stretch"></Image>
        </View>
        <View style={styles.information}>
          <View style={styles.item}>
            <Text style={styles.label}>车型</Text>
            <TextInput
              style={styles.value}
              placeholder="请输入你要估值的车型"
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>上牌时间</Text>
            <View style={styles.value}>
              <DatePicker />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>行驶里程(KM)</Text>
            <View style={styles.value}>
              <SliderExample  
                minimumValue={0}
                maximumValue={10000} 
                onSlidingComplete={(value) => this.setState({  
                  slideCompletionValue: value,  
                  slideCompletionCount: this.state.slideCompletionCount + 1})} />  
            </View>
          </View>
        </View>
        <View style={styles.evaluate}>
          <TouchableNativeFeedback style={styles.buttonWrapper}>
            <Button title="                   估值                    " onPress={this.evaluate} />
          </TouchableNativeFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tip: {
    // flex: 1
  },
  information: {
    // flex: 2
  },
  item: {
    flexDirection: 'row',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  label: {
    flex: 1.5,
    paddingTop: 18,
    paddingLeft: 5,
    color: '#333',
  },
  value: {
    flex: 3,
    height: 50
  },
  evaluate: {
    // flex: 2,
    alignItems: 'center',
    paddingTop: 15
  },
  buttonWrapper: {
    width: 200
  }
})

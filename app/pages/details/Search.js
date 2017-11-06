import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  WebView
} from 'react-native';
/* constants */
import * as config from '../../constants/Config';
import FetchRequest from '../../constants/FetchRequest';

export default class Search extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      text: '',
      carsList: []
    };
  }

  componentWillMount(){
    const { params } = this.props.navigation.state;
    this.setState({
      text: params.name
    })
    this.submit(params.name);
  }

  submit(name) {
    FetchRequest('/carsList/query', 
      'post', 
      {
        name: name
      }
    ).then((data) => {
      console.log(data)
      this.setState({
        carsList: data
      })
    })
  }

  // 主打车
  renderCarsList(list) {
    return list.map( item => this.renderCars(item) )
  }

  renderCars(item) {
    return (
      <View style={styles.cars}>
        <Image source={{uri: item.img}} style={{width: 60, height: 60}}></Image>
        <Text>{item.name}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
         <TextInput
          style={{height: 40}}
          value={this.state.text}
          placeholder="请输入你要查找的车型"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this.submit(this.state.text)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            { this.renderCarsList(this.state.carsList) }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cars: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    padding: 5,
  },
})

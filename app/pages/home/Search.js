import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Alert,
  ScrollView,
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

  alertInfo(message) {
    Alert.alert(
      '提示',
      message,
      [
        {text: '确定', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
  }

  submit(name) {
    FetchRequest('/carsList/query', 'post', {name: name}
    ).then((res) => {
      var data = res.list;
      this.setState({
        carsList: data
      })
      if ( res.status === 0 ) {
        this.alertInfo(res.message);
      } 
    }).catch((err) => {
      this.alertInfo(err);
    })
  }

  // 主打车
  renderCarsList(list) {
    if ( list.length ) {
      return list.map( (item, index) => this.renderCars(item, index) )
    }
    return (
      <Text style={{textAlign: 'center'}}>暂无数据</Text>
    )
  }

  renderCars(item, index) {
    return (
      <View style={styles.itemBox} key={index}>
        <Image source={{uri: item.img}} style={{width: 80, height: 80, borderRadius: 2}}/>
        <View style={styles.info}>
          <Text>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>类别：</Text>
            <Text>{item.type}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>变速箱：</Text>
            <Text>{item.gearbox}</Text>
          </View>
          <Text style={{color: '#DD6E32'}}>{item.price}</Text>
        </View>
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
  itemBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    borderColor: '#EEE',
    borderBottomWidth: 1,
  },
  info: {
    marginLeft: 10,
    flexDirection: 'column',
  }
})

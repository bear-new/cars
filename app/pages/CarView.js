import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView
} from 'react-native';
/* constants */
import * as config from '../constants/Config';
import FetchRequest from '../constants/FetchRequest';
/* components */
import NewsList from '../components/common/NewsList';

export default class CarView extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      brand: [],
      news: []
    };
  }

  componentWillMount(){
    (async () => {
      let brand = await FetchRequest('/brand?pagesize=50','get', '');
      let news = await FetchRequest('/news','get', '');
      this.setState({
        brand,
        news
      })
    })()
  }

   // 新闻列表
  renderBrandList(list) {
    console.log('render')
    return list.map( item => this.renderBrand(item) )
  }

  renderBrand(item) {
    console.log(item.img)
    return (
      <View style={styles.brand}>
        <Image source={{uri: item.img}} style={{width: 30, height: 20}}></Image>
        <Text>{item.name}</Text>
      </View>
    )
  }

  render () {
    return (
      <View style={{flex: 15}}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.button}>我要买车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox}>
            <Text style={styles.button}>我要卖车</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            { this.renderBrandList(this.state.brand) }
          </ScrollView>
        </View>
        <View style={styles.activityWrapper}>
          <Image source={require('../assets/images/activity1.png')} style={styles.activity}></Image>
          <Image source={require('../assets/images/activity2.jpg')} style={styles.activity}></Image>
        </View>
        <View style={styles.activityWrapper}>
          <Image source={require('../assets/images/activity3.jpg')} style={styles.activity}></Image>
          <Image source={require('../assets/images/activity4.jpg')} style={styles.activity}></Image>
        </View>
        <View style={{flex: 3}}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>买车攻略</Text>
          </View>
          <NewsList newsData={this.state.news}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  buttonBox: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    color: '#ED5529',
    backgroundColor: '#FBF1EA',
    borderColor: '#ED5529',
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 30,
    paddingRight: 30
  },
  titleBox: {
    backgroundColor: '#F6F6F6'
  },
  // 主打车
  title: {
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold'
  },
  // 品牌
  brand: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10
  },
  // 活动板块
  activityWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activity: {
    flex: 1,
    height: 60,
    resizeMode: Image.resizeMode.stretch,
    borderColor: '#ddd',
    borderBottomWidth: 1 
  },
});
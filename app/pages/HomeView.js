import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';
/* lib */
import { StackNavigator } from 'react-navigation';
/* constants */
import * as config from '../constants/Config';
import FetchRequest from '../constants/FetchRequest';
/* components */
import Slider from '../components/header/Slider';
import NewsList from '../components/common/NewsList';
/* pages */
import Search from './details/Search';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      text: '',
      banner: [],
      carsList: [],
      news: []
    };
  }

  componentWillMount(){
    (async () => {
      let banner = await FetchRequest('/banner','get', '');
      let carsList = await FetchRequest('/carsList','get', '');
      let news = await FetchRequest('/news','get', '');
      this.setState({
        banner,
        carsList,
        news,
      })
    })()
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

  // 新闻列表
  renderNewsList(list) {
    return list.map( item => this.renderNews(item) )
  }

  renderNews(item) {
    return (
      <View style={styles.news}>
        <Image source={{uri: item.img}} style={{width: 60, height: 60}}></Image>
      </View>
    )
  }

  onSubmit() {

  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{height: 40}}
          placeholder="请输入你要查找的车型"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => navigate('Search', {name: this.state.text})}
        />
        <Image source={require('../assets/images/discover/查询.png')} style={{position: 'absolute',top: 10, right: 10,width: 20,height: 20,}}/>
        <View style={{flex: 3}}>
          <Slider banner={this.state.banner}/>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.icon}>
            <Image source={require('../assets/images/new.png')} style={{width: 35, height: 35}}/>
            <Text>上市新车</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/information.png')} style={{width: 35, height: 35}}/>
            <Text>评测咨询</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/sale.png')} style={{width: 35, height: 35}}/>
            <Text>降价促销</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/rank.png')} style={{width: 35, height: 35}}/>
            <Text>热门排行</Text>
          </View>
        </View>
        <View style={{flex: 3}}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>主打车</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            { this.renderCarsList(this.state.carsList) }
          </ScrollView>
        </View>
        <View style={{flex: 2}}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>汽车快讯</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            { this.renderNewsList(this.state.news) }
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    // flex: 2.5,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  cars: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 5,
  },
  // 资讯
  news: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10
  },
});

const HomeView = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      headerTitle: '汽车搜索',
    },
  },
});

export default HomeView;

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
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
import Search from './home/Search';
import NewCars from './home/NewCars';
import Evaluate from './home/Evaluate';
import Rank from './home/Rank';
import CarsDetails from './home/CarsDetails';
import NewsDetails from './home/NewsDetails';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      banner: [],
      carsList: [],
      news: [],
    };
  }

  componentWillMount(){
    (async () => {
      let banner = await FetchRequest('/banner','get', '');
      let carsList = await FetchRequest('/carsList','get', '');
      let news = await FetchRequest('/news','get', '');
      console.log(news)
      this.setState({
        banner: banner.list,
        carsList: carsList.list,
        news: news.list,
      })
    })()
  }

  // 主打车
  renderCarsList(list) {
    return list.map( (item, index) => this.renderCars(item, index) )
  }

  renderCars(item, index) {
    const { navigate } = this.props.navigation;
    return (
        <TouchableOpacity style={styles.cars} key={index} onPress={() => navigate('CarsDetails', {details: item})}>
          <Image source={{uri: item.img}} style={{width: 60, height: 60, borderRadius: 50}}></Image>
          <Text style={{}}>{item.name}</Text>
        </TouchableOpacity>
    )
  }

  // 跳转到新闻详情
  goDetails(link) {
    const { navigate } = this.props.navigation;
    navigate('NewsDetails', { link });
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <TextInput
          style={{height: 50}}
          placeholder="请输入你要查找的车型"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => navigate('Search', {name: this.state.text})}
        />
        <Image source={require('../assets/images/discover/查询.png')} style={{position: 'absolute',top: 15, right: 10,width: 20,height: 20,}}/>
        <View style={{flex: 3, height: 150, marginTop: -6}}>
          <Slider banner={this.state.banner} goDetails={ this.goDetails.bind(this) }/>
        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.icon} onPress={() => navigate('NewCars')}>
            <Image source={require('../assets/images/new.png')} style={{width: 35, height: 35}}/>
            <Text>上市新车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigate('Evaluate')}>
            <Image source={require('../assets/images/information.png')} style={{width: 35, height: 35}}/>
            <Text>爱车估值</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigate('Rank')}>
            <Image source={require('../assets/images/sale.png')} style={{width: 35, height: 35}}/>
            <Text>降价促销</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => navigate('Rank')}>
            <Image source={require('../assets/images/rank.png')} style={{width: 35, height: 35}}/>
            <Text>热门排行</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 3}}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>主打车</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            { this.renderCarsList(this.state.carsList) }
          </ScrollView>
        </View>
        <View style={{flex: 2, paddingBottom: 20, backgroundColor: '#FFF'}}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>汽车快讯</Text>
            <View style={{backgroundColor: '#FFF'}}>
              <NewsList newsData={this.state.news} goDetails={this.goDetails.bind(this)}/>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    height: 80,
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
    fontSize: 14,
    color: '#333'
  },
  cars: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
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
  // 搜索
  Search: {
    screen: Search,
    navigationOptions: {
      headerTitle: '汽车搜索',
      headerTitleStyle: {
        color: '#F25C29',
        fontSize: 16,
      },
      headerTintColor: '#F25C29'
    },
  },
  // 上市新车
  NewCars: {
    screen: NewCars,
    navigationOptions: {
      header: null,
    },
  },
  // 爱车估值
  Evaluate: {
    screen: Evaluate,
    navigationOptions: {
      headerTitle: '估值',
      headerTitleStyle: {
        color: '#F25C29',
        fontSize: 16,
      },
      headerTintColor: '#F25C29'
    },
  },
  // 降价促销/热门排行
  Rank: {
    screen: Rank,
    navigationOptions: {
      headerTitle: '促销-排行',
      headerTitleStyle: {
        color: '#F25C29',
        fontSize: 16,
      },
      headerTintColor: '#F25C29'
    },
  },
  // 汽车详情
  CarsDetails: {
    screen: CarsDetails,
    navigationOptions: {
      headerTitle: '汽车详情',
      headerTitleStyle: {
        color: '#F25C29',
        fontSize: 16,
      },
      headerTintColor: '#F25C29'
    },
  },
  // 新闻详情
  NewsDetails: {
    screen: NewsDetails,
    navigationOptions: {
      headerTitle: '详情',
      headerTitleStyle: {
        color: '#F25C29',
        fontSize: 16,
      },
      headerTintColor: '#F25C29'
    },
  },
});

export default HomeView;

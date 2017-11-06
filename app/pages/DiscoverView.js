import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  WebView
} from 'react-native';
 
export default class DiscoverView extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 18, backgroundColor: '#F6F6F6'}}>
        <View style={styles.iconWrapper}>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/对比vs.png')} style={{width: 35, height: 35}}/>
            <Text>车型对比</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/计算器.png')} style={{width: 35, height: 35}}/>
            <Text>购车计算器</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/估值.png')} style={{width: 35, height: 35}}/>
            <Text>爱车估值</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/查询.png')} style={{width: 35, height: 35}}/>
            <Text>保值率查询</Text>
          </View>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/附近.png')} style={{width: 35, height: 35}}/>
            <Text>附近经销商</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/能源.png')} style={{width: 35, height: 35}}/>
            <Text>能源车</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/加油卡充值.png')} style={{width: 35, height: 35}}/>
            <Text>加油充值</Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../assets/images/discover/保险.png')} style={{width: 35, height: 35}}/>
            <Text>低价保险</Text>
          </View>
        </View>
        <View style={{flex: 3, backgroundColor: '#FFF'}}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>最新活动</Text>
          </View>
          <View style={styles.activityWrapper}>
            <View style={{flex: 1,borderColor: '#eee', borderRightWidth: 1}} >
              <Image source={require('../assets/images/discover/activity1.png')} style={{width: 160, height: 120}}/>
            </View>
            <View style={{flex: 1}}>
              <Image source={require('../assets/images/discover/activity2.jpg')} style={{width: 160, height: 60,borderColor: '#eee', borderBottomWidth: 1}}/>
              <Image source={require('../assets/images/discover/activity3.jpg')} style={{width: 160, height: 60,borderColor: '#eee', borderTopWidth: 1}}/>
            </View>
          </View>
        </View>
        <View style={{flex: 2}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1.2,
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
  title: {
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold'
  },
  activityWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activity: {
    width: 100,
    height: 100,
    flex: 1,
    // resizeMode: Image.resizeMode.cover,
    borderColor: '#ddd',
    borderBottomWidth: 1 
  },
})

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';
 
export default class MyView extends React.Component{

  constructor(props) {
    super(props);
  
    this.state = {
      models: [
        {
          img: require('../assets/images/MY/消息.png'),
          title: '我的消息',
        },
        {
          img: require('../assets/images/MY/钱包.png'),
          title: '我的钱包',
        },
        {
          img: require('../assets/images/MY/询价记录.png'),
          title: '询价记录',
        },
        {
          img: require('../assets/images/MY/订单.png'),
          title: '我的订单',
        },
        {
          img: require('../assets/images/MY/收藏.png'),
          title: '我的收藏',
        },
        {
          img: require('../assets/images/MY/历史.png'),
          title: '浏览历史',
        },
        {
          img: require('../assets/images/MY/分享.png'),
          title: '分享给朋友',
        },
        {
          img: require('../assets/images/MY/意见反馈.png'),
          title: '意见反馈',
        }
      ]
    };
  }

   // 新闻列表
  renderList(list) {
    return list.map( (item, index) => this.renderItem(item, index) )
  }

  renderItem(item, index) {
    console.log(item.img)
    return (
      <View style={styles.box} key={index}>
        <View style={styles.left}>
          <View style={styles.avatar}>
            <Image source={item.img} style={{width: 20, height: 20}} resizeMode={'cover'}/>
          </View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
        <View style={styles.right}>
          <Image source={require('../assets/images/MY/Next.png')} style={{width: 20, height: 20}}/>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 18, backgroundColor: '#F6F6F6'}}>
        <View style={[styles.box, styles.header]}>
          <View style={styles.left}>
            <View style={styles.avatar}>
              <Image source={require('../assets/images/MY/登录.png')} style={{width: 40, height: 40}} resizeMode={'cover'}/>
            </View>
            <Text style={styles.text}>登录账号</Text>
          </View>
          <View style={styles.right}>
            <Image source={require('../assets/images/MY/Next.png')} style={{width: 20, height: 20}}/>
          </View>
        </View>
        <View style={{flex: 9}}>
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            { this.renderList(this.state.models) }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
    flex: 2
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingLeft: 5,
    paddingRight: 5,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  avatar: {
    width: 40,
    height: 40,
    justifyContent: 'center'
  },
  text: {
    paddingLeft: 5,
    color: '#333'
  }
})

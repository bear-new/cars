import React, { Component } from 'react';
import TabBarItem from './TabBarItem';
import {
  View,
  StyleSheet
} from 'react-native';

export default class MyTabBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      homeStatus: true,
      carStatus: false,
      discoverStatus: false,
      myStatus: false,
    };
  }

  static defaultProps={

  }

  static propTypes={

  }

  onPress(status) {
    const { homeStatus, carStatus, discoverStatus, myStatus } = this.state;
    this.setState({
      homeStatus: false,
      carStatus: false,
      discoverStatus: false,
      myStatus: false
    })
    this.props.navigate(status);
    switch ( status ) {
      case 'homeStatus':
        this.setState({
          homeStatus: true
        })
        break;
      case 'carStatus':
        this.setState({
          carStatus: true
        })
        break;
      case 'discoverStatus':
        this.setState({
          discoverStatus: true
        })
        break;
      case 'myStatus':
        this.setState({
          myStatus: true
        })
        break;
      default:
        this.setState({
          homeStatus: true
        })
        break;
    }
  }

  render() {
    const { homeStatus, carStatus, discoverStatus, myStatus } = this.state;
    console.log(this.state)
    return (
      <View style={styles.tabs}>
        <TabBarItem title='首页'
                    icon={require('../../assets/images/home.png')}
                    selectedIcon={require('../../assets/images/home_selected.png')}
                    selected={homeStatus}
                    onPress={()=>{this.onPress('homeStatus')}}
        />
        <TabBarItem title='找车'
                    badge='1'
                    icon={require('../../assets/images/car.png')}
                    selectedIcon={require('../../assets/images/car_selected.png')}
                    selected={carStatus}
                    onPress={()=>{this.onPress('carStatus')}}
        />
        <TabBarItem title='发现'
                    icon={require('../../assets/images/discover.png')}
                    selectedIcon={require('../../assets/images/discover_selected.png')}
                    selected={discoverStatus}
                    onPress={()=>{this.onPress('discoverStatus')}}
        />
        <TabBarItem title='我的'
                    icon={require('../../assets/images/mine.png')}
                    selectedIcon={require('../../assets/images/mine_selected.png')}
                    selected={myStatus}
                    onPress={()=>{this.onPress('myStatus')}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    paddingTop: 6,
    backgroundColor: '#eee',
    borderTopColor: '#333',
    shadowColor: 'red',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
});
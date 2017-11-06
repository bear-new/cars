/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'home'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Image source={require('./app/assets/images/home.png')} />}
              renderSelectedIcon={() => <Image source={require('./app/assets/images/home_selected.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <View >
                        <Text>首页</Text>
                  </View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Profile"
              renderIcon={() => <Image source={require('./app/assets/images/car.png')} />}
              renderSelectedIcon={() => <Image source={require('./app/assets/images/car_selected.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
              <View >
                        <Text>ge</Text>
                  </View>
            </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

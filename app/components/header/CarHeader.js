import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: '#F25C29',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTitleStyle: {
      paddingLeft: 5,
      color: '#FFF',
    }
});

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Image source={require('../assets/images/car.png')}
              style={{width: 30, height: 30}} />
        <Text style={styles.headerTitleStyle}>商城</Text>
      </View>
    )
  }
}

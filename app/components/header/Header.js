import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

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
        <Image source={require('../../assets/images/prev1.png')}
              style={{width: 30, height: 30}} onPress={() => { this.props.navigate }}/>
        <Text style={styles.headerTitleStyle}>{ this.props.title }</Text>
      </View>
    )
  }
}

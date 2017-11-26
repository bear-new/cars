import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

export default class SortSelect extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    const { options, onChangeSelect } = this.props;
    return (
      <View style={styles.sortWrapper}>
        {
          options.map((item, index) => {
            // 排序图标
            let icon = require('../../assets/images/unSelect.png');
            if (item.select) {
              icon = item.select === 'top' ? require('../../assets/images/sortTop.png') : require('../../assets/images/sortBottom.png');
            }
            return (
              <TouchableWithoutFeedback key={index} onPress={() => {onChangeSelect(item)}}>
                <View style={styles.sortItem}>
                  <Text style={item.select ? styles.selectColor : null}>{ item.value }</Text>
                  <Image source={icon} style={{width: 35, height: 35}}/>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  sortWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sortItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectColor: {
    color: '#F25C29'
  }
})
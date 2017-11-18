import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';

export default class SegmentedControl extends React.Component{
  static defaultProps = {
    selectedIndex: 0,
    values: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex,
      values: props.values,
      style: props.style
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.props.selectedIndex) {
      this.setState({
        selectedIndex: nextProps.selectedIndex,
      });
    }
  }

  onPress(index) {
    const { dataSource } = this.props;
    let len = dataSource.length;
    let newArr = [];
    dataSource.map((item, index) => {
      newArr.push(dataSource[len-index-1])
    })
    this.props.onChange(newArr);
    this.setState({
      selectedIndex: index,
    });
  }

  render() {

    const { selectedIndex, values, style, dataSource } = this.state;
    const items = values.map((value, idx) => {
      if (idx === 0) {
        itemRadius = styles.itemLeftRadius;
      } else if (idx === values.length - 1) {
        itemRadius = styles.itemRightRadius;
      }

      return (
        <TouchableNativeFeedback
          onPress={() => this.onPress(idx)}
          key={idx}
        >
          <Text style={[styles.itemText, itemRadius, idx === selectedIndex ? styles.selectedText : null]}>
            {value}
          </Text>
        </TouchableNativeFeedback>
      );
    });

    return (
      <View style={[styles.segmentedStyle, style]}>
        {items}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segmentedStyle: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemLeftRadius: {
    borderWidth: 1,
    borderColor: '#4EABF5',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 5,
  },
  itemRightRadius: {
    borderWidth: 1,
    borderColor: '#4EABF5',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingRight: 5,  
  },
  itemText: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 2,
    paddingRight: 2
  },
  selectedText: {
    backgroundColor: '#4EABF5',
    color: '#FFF'
  },
})
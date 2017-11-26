                import React, { Component } from 'react';
                import {
                  AppRegistry,
                  StyleSheet,
                  Text,
                  Button,
                  Image,
                  View,
                  TouchableNativeFeedback,
                  FlatList
                } from 'react-native';
                /* constants */
                import * as config from '../../constants/Config';
                import FetchRequest from '../../constants/FetchRequest';
                /* components */
                import SegmentedControl from '../../components/header/SegmentedControl';

                export default class NewCars extends React.Component{

                  constructor(props) {
                    super(props);
                  
                    this.state = {
                      text: '',
                      carsList: [],
                    };
                  }

                  componentWillMount(){
                    (async () => {
                      let carsList = await FetchRequest('/carsList','get', '');
                      carsList.list.map((item, index) => {
                        item.key = item._id;
                      })
                      this.setState({
                        carsList: carsList.list,
                      })
                    })()
                  }

                  onChange(newState) {
                    this.setState({
                      carsList: newState
                    })
                  }

                  render() {
                    const { navigate, goBack } = this.props.navigation;
                    let { carsList } = this.state;
                    return (
                      <View>
                        <TouchableNativeFeedback onPress={() => { goBack() }}>
                          <Image source={require('../../assets/images/prev1.png')}
                            style={{width: 20, height: 20, position: 'absolute', top: 12, left: 5, zIndex: 10}}/>
                        </TouchableNativeFeedback>
                        <SegmentedControl style={styles.segmented} values={['新车上市', '即将销售']}  dataSource={this.state.carsList} selectedIndex={0} onChange={this.onChange.bind(this)}/>
                        <FlatList
                          style={styles.list}
                          data={this.state.carsList}
                          renderItem={({item}) => {
                            return (
                              <View style={styles.itemBox}>
                                <Image source={{uri: item.img}} style={{width: 80, height: 80, borderRadius: 2}}/>
                                <View style={styles.info}>
                                  <Text>{item.name}</Text>
                                  <View style={{flexDirection: 'row'}}>
                                    <Text>变速箱：</Text>
                                    <Text>{item.gearbox}</Text>
                                  </View>
                                  <Text style={{color: '#DD6E32'}}>{item.price}</Text>
                                </View>
                              </View>
                            )
                          }}
                        />
                      </View>
                    )
                  }
                }

                const styles = StyleSheet.create({
                  segmented: {
                    marginTop: 10,
                    paddingBottom: 10,
                  },
                  list: {
                    backgroundColor: '#FFF',
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginBottom: 45
                  },
                  itemBox: {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 5,
                    paddingBottom: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                    flexDirection: 'row',
                    borderColor: '#EEE',
                    borderBottomWidth: 1,
                  },
                  info: {
                    marginLeft: 10,
                    flexDirection: 'column',
                  }
                })

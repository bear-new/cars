import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import { TabNavigator, NavigationActions } from "react-navigation";
/* constants */
import FetchRequest from '../../constants/FetchRequest';
/* menu */
import SortSelect from '../../components/header/SortSelect';

class CarsList extends React.Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	// 主打车
	renderCarsList(list) {
	    if ( list.length ) {
	      return list.map( (item, index) => this.renderCars(item, index) )
	    }
	    return (
	      <Text style={{textAlign: 'center'}}>暂无数据</Text>
	    )
	}

  	renderCars(item, index) {
	    return (
		    <View style={styles.itemBox} key={index}>
		        <Image source={{uri: item.img}} style={{width: 80, height: 80, borderRadius: 2}}/>
		        <View style={styles.info}>
		          	<Text>{item.name}</Text>
		          	<View style={{flexDirection: 'row'}}>
			            <Text>类别：</Text>
			            <Text>{item.type}</Text>
		          	</View>
		          	<View style={{flexDirection: 'row'}}>
		            	<Text>变速箱：</Text>
		            	<Text>{item.gearbox}</Text>
		          	</View>
		          	<Text style={{color: '#DD6E32'}}>{item.price}</Text>
		        </View>
		    </View>
	    )
  	}

	render() {
		const { carsList } = this.props;
		return (
			<View>
				<ScrollView showsVerticalScrollIndicator={false}>
		            { this.renderCarsList(carsList) }
		        </ScrollView>
			</View>
		)
	}
}

export default class Sort extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	options: [
	  		{
	  			value: '价格',
	  			select: 'top'
	  		},
	  		{
	  			value: '销量',
	  			select: ''
	  		},
	  	],
	  	select: {
	  		value: 'price',
	  		type: 1
	  	},
	  	carsList: []
	  };
	}

	componentWillMount() {
		this.getCarsList();
	}

	// 请求carsList
	getCarsList() {
		FetchRequest('/carsList/sort', 
			'post', 
			{
				sortValue: this.state.select.value,
				sortType: this.state.select.type
			}
	    ).then((res) => {
	      	var data = res.list;
	      	this.setState({
	    		carsList: data
	  		})	
	      	if ( res.status === 0 ) {
	        	this.alertInfo(res.message);
	      	} 
	    }).catch((err) => {
	      	this.alertInfo(err);
	    })
	}

	// 改变排序方式
	changeSelect(select) {
		let tmpArr = this.state.options;
		let tmpObj = this.state.select;
		// select
		tmpObj.value = select.sortValue === '价格' ? 'price' : 'name';
		// options
		tmpArr.map((item, index) => {
			if ( item === select ) {
				if ( item.select ) {
					item.select = item.select === 'top' ? 'bottom' : 'top';
					tmpObj.type = item.select === 'top' ? -1 : 1;
				} else {
					item.select = 'top';
					tmpObj.type = -1;
				}
			} else {
				item.select = '';
			}
		})

		this.setState({
			options: tmpArr,
			select: tmpObj
		}, () => {
			this.getCarsList();
		});
	}

	render() {
    	return (
    		<View>
    			<SortSelect options={this.state.options} onChangeSelect={this.changeSelect.bind(this)}/>
    			<CarsList carsList={this.state.carsList}/>
    		</View>
		)
  	}

};

const styles = StyleSheet.create({
  itemBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 5,
    paddingTop: 5,
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
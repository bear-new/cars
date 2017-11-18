import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { TabNavigator } from "react-navigation";
/* constants */
import FetchRequest from '../../constants/FetchRequest';

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

class Sedan extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	carsList: []
	  };
	}

	componentWillMount() {
		FetchRequest('/carsList/sort', 'post', {type: '中型车'}
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

  	render() {
    	return (
    		<CarsList carsList={this.state.carsList}/>
		)
  	}
}

class Suv extends React.Component {
  
  	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		carsList: []
	  	};
	}

	componentWillMount() {
		FetchRequest('/carsList/sort', 'post', {type: 'SUV'}
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

  	render() {
    	return (
    		<CarsList carsList={this.state.carsList}/>
		)
  	}
}

class Microbus extends React.Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		carsList: []
	  	};
	}

	componentWillMount() {
		FetchRequest('/carsList/sort', 'post', {type: '微面'}
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

  	render() {
    	return (
    		<CarsList carsList={this.state.carsList}/>
		)
  	}
}

const MainScreenNavigator = TabNavigator({
  小汽车: { screen: Sedan },
  Suv: { screen: Suv },
  面包车: { screen: Microbus },
}, {
	tabBarPosition: 'top',
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: '#108EE9',
		inactiveTintColor: '#333',
		labelStyle: {
	    	fontSize: 12,
	  	},
	 	style: {
	 		backgroundColor: 'transparent',
	    	height: 40,
	  	},
	  	indicatorStyle: {
	  		borderColor: '#108EE9',
	  		borderBottomWidth: 1,
	  	}
	},
});

export default MainScreenNavigator;

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
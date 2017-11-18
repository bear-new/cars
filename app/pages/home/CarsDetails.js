import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	WebView,
    StyleSheet,
} from 'react-native';

export default class CarsDetails extends Component {
	
	componentWillMount(){
	    const { params } = this.props.navigation.state;
	    console.log(params)
	    this.setState({
	      params: params
	    })
	 }

	render() {
		let item = this.state.params.details;
		return (
			<View style={styles.itemBox} key={item._id}>
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
}

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
	    borderTopWidth: 1,
  	},
  	info: {
	    marginLeft: 10,
	    flexDirection: 'column',
  	}
});
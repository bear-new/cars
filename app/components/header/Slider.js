import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
	View,
	Text,
	Image,
	TouchableNativeFeedback,
	TouchableHighlight,
	TouchableOpacity, 
    StyleSheet,
} from 'react-native';

export default class Slider extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	renderItem(item) {
		return (
			<TouchableNativeFeedback onPress={() => { this.props.goDetails(item.link) }}>
		        <View style={styles.slide}>
		          	<Image source={{uri: item.img}}  style={{alignSelf: 'stretch', height: 160}}/>
		        </View>
	       	</TouchableNativeFeedback>
		)
	}

	render() {
		const { banner } = this.props;
		return (
			<Swiper style={styles.wrapper}
					horizontal={true} 
					paginationStyle={{position: 'absolute', bottom: 5}}
					dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
					activeDotStyle={{backgroundColor: 'rgba(255,255,255,.8)'}}
					showsPagination={true}
					>
				{
					banner.map((item, index) => {
						return (
							<View style={styles.slide} key={index}>
					        	<TouchableNativeFeedback onPress={() => { this.props.goDetails(item.link) }}>
					          		<Image source={{uri: item.img}}  style={{alignSelf: 'stretch', height: 160}}/>
					        	</TouchableNativeFeedback>
					        </View>
						)
					})
				}
	      	</Swiper>
		)
	}
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
    },
    image: {
    	flex: 1,
    	width: 100,
    	height: 2,
    	resizeMode: Image.resizeMode.stretch,
    },
});
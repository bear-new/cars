import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {
	View,
	Text,
	Image,
    StyleSheet,
} from 'react-native';

export default class Slider extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const { banner } = this.props;
		let slide1 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509903345402&di=f302e60d03a7b8ef0c2e3010a5d974f1&imgtype=0&src=http%3A%2F%2Fbig5.made-in-china.com%2Fimages%2Fcommon%2Fempty_mid.png';
		let slide2 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509903345402&di=f302e60d03a7b8ef0c2e3010a5d974f1&imgtype=0&src=http%3A%2F%2Fbig5.made-in-china.com%2Fimages%2Fcommon%2Fempty_mid.png';
		let slide3 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509903345402&di=f302e60d03a7b8ef0c2e3010a5d974f1&imgtype=0&src=http%3A%2F%2Fbig5.made-in-china.com%2Fimages%2Fcommon%2Fempty_mid.png';
		let slide4 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509903345402&di=f302e60d03a7b8ef0c2e3010a5d974f1&imgtype=0&src=http%3A%2F%2Fbig5.made-in-china.com%2Fimages%2Fcommon%2Fempty_mid.png';
		if ( banner.length ) {
			slide1 = banner[0]['img'];
			slide2 = banner[1]['img'];
			slide3 = banner[2]['img'];
			slide4 = banner[3]['img'];
		}
		return (
			<Swiper style={styles.wrapper}
					horizontal={true} 
					paginationStyle={{position: 'absolute', bottom: 5}}
					dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
					activeDotStyle={{backgroundColor: 'rgba(255,255,255,.8)'}}
					showsPagination={true}
					>
		        <View style={styles.slide}>
		          	<Image source={{uri: slide1}}  style={{alignSelf: 'stretch', height: 160}}/>
		        </View>
		        <View style={styles.slide}>
		        	<Image source={{uri: slide2}}  style={{alignSelf: 'stretch', height: 160}}/>
		        </View>
		        <View style={styles.slide}>
		        	<Image source={{uri: slide3}}  style={{alignSelf: 'stretch', height: 160}}/>
		        </View>
		        <View style={styles.slide}>
		        	<Image source={{uri: slide4}}  style={{alignSelf: 'stretch', height: 160}}/>
		        </View>
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
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
		if (banner.length) {
			return (
		      	<Swiper style={styles.wrapper} 
		      			autoplay={true}
		      			dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, }} />}
						activeDotStyle={{backgroundColor: 'rgba(255,255,255,.8)'}}
						paginationStyle={{position: 'absolute', bottom: 5}}
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
		} else {
			return (
				<View></View>
			)
		}
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
    wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
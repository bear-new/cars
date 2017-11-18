import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class NewsItem extends React.Component {
	render() {
		return (
			<TouchableOpacity
				style={styles.item}
        		onPress={() => { this.props.goDetails(this.props.link) }}
			>
				<View style={styles.newsList}>
					<Image style={styles.image}
						resizeMode={'cover'}
						source={{uri: this.props.src}}
					/>
					<View style={styles.text}>
						<Text style={styles.title}>{this.props.title}</Text>
						<Text style={styles.des}>{this.props.des}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
} 

export default class NewsList extends Component {
	
	render() {
		const { newsData, goDetails } = this.props;
		return (
			<ScrollView>
				{newsData.map((item, index) => {
					return (
						<NewsItem key={index} 
								src={item.img} 
								title={item.title} 
								des={item.des} 
								link={item.link} 
								goDetails={goDetails}
						/>
					)
				})}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		borderColor: '#eee',
		borderBottomWidth: 1,
	},
	newsList: {
		flex: 1,
		flexDirection: 'row',
		margin: 5,
	},
    image: {
    	flex: 3,
    	borderRadius: 2
    },
    text: {
    	flex: 6,
    	paddingLeft: 10,
    	paddingBottom: 10,
    },
    title: {
    	fontWeight: 'bold',
    	fontSize: 16,
    },
    des: {
    	height: 70,
    	paddingTop: 5,
    	paddingRight: 5,
    	overflow: 'hidden',
    }
});
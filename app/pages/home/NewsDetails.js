import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	WebView,
    StyleSheet,
} from 'react-native';

export default class NewsList extends Component {
	
	componentWillMount(){
	    const { params } = this.props.navigation.state;
	    console.log(params)
	    this.setState({
	      link: params.link
	    })
	 }

	render() {
		const { newsData } = this.props;
		return (
			<View style={styles.container}>
				<WebView
		          ref={webview => { this.webview = webview; }}
		          style={styles.webview}
		          source={{uri: this.state.link}}
		        />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	webview: {
		flex: 1
	}
});
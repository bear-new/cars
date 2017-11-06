/* react-naitve */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TouchableHighlight,
	ScrollView,
} from 'react-native';
/* lib */
import { StackNavigator } from 'react-navigation';
/* components */
/* page */
import MyTabBar from './components/footer/TabBar';
import HomeView from './pages/HomeView';
import CarView from './pages/CarView';
import DiscoverView from './pages/DiscoverView';
import MyView from './pages/MyView';
import Search from './pages/details/Search';
/* redux */
import { bindActionCreators } from 'redux'
import { createStore } from 'redux';
import { connect } from 'react-redux'
import * as Actions from './actions/index.js';
import * as types from './constants/ActionTypes'

import reducers from './reducers';

const store = createStore(reducers)

class Index extends React.Component {

	constructor(props) {
	  	super(props);
	  	this.state = {};
	}

 	render() {
 		const { renderView, actions } = this.props;
 		let page = '';
 		switch ( renderView.type ) {
 			case 'homeStatus':
 				return (
			       	<View style={{flex: 5}}>
		       			<View style={{flex: 22}}>
			       			<HomeView />
			       		</View>
						<View style={{flex: 2}}>
							<MyTabBar navigate={actions.navigate}/>
						</View>
					</View>
			    );
		    case 'carStatus':
 				return (
			       	<View style={{flex: 1}}>
			       		<CarView />
						<View style={{flex: 2}}>
							<MyTabBar navigate={actions.navigate}/>
						</View>
					</View>
			    );
		    case 'discoverStatus':
 				return (
			       	<View style={{flex: 1}}>
			       		<DiscoverView />
						<View style={{flex: 2}}>
							<MyTabBar navigate={actions.navigate}/>
						</View>
					</View>
			    );
		    case 'myStatus':
 				return (
			       	<View style={{flex: 1}}>
			       		<MyView />
						<View style={{flex: 2}}>
							<MyTabBar navigate={actions.navigate}/>
						</View>
					</View>
			    );
		    default:
		    	return (
			       	<View style={{flex: 1}}>
			       		<View style={{flex: 22}}>
			       			<HomeView />
			       		</View>
						<View style={{flex: 2}}>
							<MyTabBar navigate={actions.navigate}/>
						</View>
					</View>
			    );
 		}
	    
  	}
}

const mapStateToProps = state => {
	return {
		renderView: state.navigate
	}
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)


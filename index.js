/* react-naitve */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index.js';
/*redux*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers';

const store = createStore(reducers)

class my_react_native extends React.Component {

  render() {
    return (
       	<Provider store={store}>
	   		<App />
	  	</Provider>
    )
  }
}

AppRegistry.registerComponent('cars', () => my_react_native);

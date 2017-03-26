import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Router from './Drawer/router';

export default class App extends Component {
	componentDidMount() {
		StatusBar.setHidden(false);
		StatusBar.setBarStyle('#3F51B5');
	}
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#3F51B5'}}>
				<Router/>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Router from './Drawer/router';

export default class App extends Component {
	componentDidMount() {
		StatusBar.setHidden(false);
		StatusBar.setBackgroundColor('#009587');
	}
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#009587'}}>
				<Router/>
			</View>
		);
	}
}

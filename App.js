import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Router from './Drawer/router';

export default class App extends Component {
	componentDidMount() {
		StatusBar.setHidden(true);
	}
	render() {
		return (
			<Router />
		);
	}
}

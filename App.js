import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Router from './router';

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

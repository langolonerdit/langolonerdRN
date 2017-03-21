import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Toolbar from './Toolbar';

export default class App extends Component {
	componentWillMount() {
		StatusBar.setHidden(true);
	}

	render() {
		return (
			<View>
				<Toolbar />
			</View>
		);
	}
}

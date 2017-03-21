import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
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

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

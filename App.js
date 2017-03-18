import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Toolbar from './Toolbar';
import PostsList from './PostsList';

export default class App extends Component {
	componentWillMount() {
		StatusBar.setHidden(true);
	}

	render() {
		return (
			<View>
			<Toolbar />
			<PostsList />
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

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
	name: {
		marginLeft: 10,
		fontSize: 20,
		color: '#444d56'
	},
	container: {
		padding: 7
	},
	icon: {
		marginRight: 15
	}
});

export default class DrawerEntry extends Component {
	render() {
		return (
			<TouchableOpacity
				onPress={_ => _}>
				<View style={styles.container}>
					<Text style={styles.name}>
						<Ionicons name="md-folder" size={20}/>
						{" " + this.props.name}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
};

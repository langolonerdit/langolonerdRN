import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
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
			<TouchableNativeFeedback
				onPress={_ => _}
				background={TouchableNativeFeedback.Ripple('#d4d2d2')} 
				delayPressIn={0} >
				<View style={styles.container}>
					<Text style={styles.name}>
						<Ionicons name="md-folder" size={20}/>
						{" " + this.props.name}
					</Text>
				</View>
			</TouchableNativeFeedback>
		)
	}
};

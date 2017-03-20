import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: 'row',
		height: 150,
	},
	text: {
		marginTop: -5,
		marginLeft: 12,
		marginRight: 55,
	},
	title: {
		fontSize: 18,
	},
	descr: {
		color: '#5b5b5b',
	},
	meta: {
		color: '#5b5b5b',
		fontSize: 12,
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 5,
	},
});

export default class PostEntry extends Component {
	click(id) {
		console.log(id);
	}

	render() {
		return (
			<TouchableOpacity
				onPress={ _ => this.click(this.props.id) } >
				<View style={styles.container}
					key={this.props.id} >
					<Image source={{ uri: 'http://www.langolonerd.it/imgs/' + this.props.img}} style={styles.image} />
					<View style={styles.text}>
						<Text style={styles.title}>
							{this.props.title}
						</Text>
						<Text style={styles.descr}>
							{this.props.content}
						</Text>
						<Text style={styles.meta}>
							{'Pubblicato da ' + this.props.user + ' il ' + this.props.data_in}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
};
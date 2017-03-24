import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PostEntry.style';

export default class PostEntry extends Component {
	click() {
		/* when you bind a function to this you can access this properties, like props
		TODO: change scene on tap */
		console.log(this.props.content_full)
		const { id, title, content_full, img } = this.props
		this.props.navigation.navigate('Post', { id, title, content_full, img })
	}

	render() {
		/* there is a new way of concat strings with variables:
			const greet = name => `hi ${name}`
			greet('aro') prints 'hi aro'
		*/
		return (
			<TouchableOpacity
				onPress={this.click.bind(this)} >
				<View style={styles.container}
					key={this.props.id} >
					<Image source={{ uri: `http://www.langolonerd.it/imgs/${this.props.img}`}} style={styles.image} />
					<View style={styles.text}>
						<Text style={styles.title}>
							{this.props.title}
						</Text>
						<Text style={styles.descr}>
							{this.props.content}
						</Text>
						<Text style={styles.meta}>
							{`Pubblicato da ${this.props.user} il ${this.props.data_in}`}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
};

import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import styles from './PostEntry.style';

export default class PostEntry extends Component {
	click() {
		const { id, title, content_full, img, keywords, slug } = this.props
		this.props.navigation.navigate('Post', { id, title, content_full, img, keywords, slug })
	}

	render() {
		return (
			<TouchableNativeFeedback
				onPress={this.click.bind(this)}
				background={TouchableNativeFeedback.Ripple('#d4d2d2')}
				delayPressIn={0} >
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
			</TouchableNativeFeedback>
		)
	}
};

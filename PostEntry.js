import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const PostEntry = (props) => (
	<View style={styles.container}
		key={`${props.id}`}>
		<Image source={{ uri: 'http://www.langolonerd.it/imgs/' + props.img}} style={styles.image} />
		<View style={styles.text}>
			<Text style={styles.title}>
				{`${props.title}`}
			</Text>
			<Text style={styles.descr}>
				{`${props.content}`}
			</Text>
			<Text style={styles.meta}>
				{'Pubblicato da ' + props.user + ' il ' + props.data_in}
			</Text>
		</View>
	</View>
);

export default PostEntry;
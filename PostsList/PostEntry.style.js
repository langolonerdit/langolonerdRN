import { StyleSheet } from 'react-native';

/*
	better keep them in a separate file so that it doesn't clutter other files
	since it is js we can define a brand style file with variables, like sass.
*/

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: 'row',
		height: 160,
	},
	text: {
		marginTop: -5,
		marginLeft: 12,
		marginRight: 65,
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
		height: 70,
		width: 70,
		borderRadius: 5,
	},
});

export default styles;

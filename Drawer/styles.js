import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	drawer_header: {
		backgroundColor: '#009587',
		height: 150
	},
	drawer_logo: {
		width: 80,
		height: 80,
		marginTop: 20,
		marginLeft: 20
	},
	drawer_title: {
		margin: 10,
		fontSize: 25,
		textAlign: 'left',
		color: '#fff',
		flexGrow: 1,
	},
	drawer_list: {
		marginTop: 10
	},
	drawer_head: {
		padding: 10,
		fontSize: 20,
		color: '#444d56',
		marginBottom: -20
	}
});

export default styles;

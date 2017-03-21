import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import PostEntry from './PostEntry';

export default class PostsList extends Component {
	static defaultProps = {
		cat: '',
		tag: '',
		search: '',
	}

	constructor(props) {
		super(props)
		this.state = {isLoading: true, jsonData: ''}
		this.dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
	}

	componentDidMount() {
		this.setState({ jsonData: this.loadJSONData() })
	}

	loadJSONData() {
		const {cat, tag, search} = this.props;
		fetch(`http://www.langolonerd.it/api/get_all_posts.php`
			 + `?cat=${cat}&tag=${tag}&search=${search}`
			, {method: 'GET'})
			.then((response) => {
				return response.json()
			})
			.then((responseJson) => {
				r = JSON.stringify(responseJson);
				r = this.prettifyText(r);
				responseJson = JSON.parse(r);
				this.setState({isLoading: false, jsonData: responseJson});
				return responseJson;
			})
			.catch((error) => {
				console.log("ERROR: " + error);
			});
	}

	prettifyText(text) {
		text = text.replace(/&nbsp;/g, " ");
		text = text.replace(/&agrave;/g, "à");
		text = text.replace(/&egrave;/g, "è");
		text = text.replace(/&igrave;/g, "ì");
		text = text.replace(/&ugrave;/g, "ù");
		text = text.replace(/&ograve;/g, "ò");
		return text;
	}

	render() {
		const rows = this.dataSource.cloneWithRows(this.state.jsonData || [])

		return (
			<ListView
				dataSource={rows}
				enableEmptySections={true}
				renderRow={(data) => <PostEntry {...data} />}
			/>
		)
	}
}
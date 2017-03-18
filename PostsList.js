import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import PostEntry from './PostEntry';

export default class PostsList extends Component {
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
		fetch('http://www.langolonerd.it/api/get_all_posts.php', {method: 'GET'})
		.then((response) => {
			//response = this.prettifyText(response)
			console.log(response);
			return response.json()
		})
		.then((responseJson) => {
			console.log(responseJson);
			//console.log(this.prettifyText("Pretty &egrave; !!!"));
			this.setState({isLoading: false, jsonData: responseJson});
			return responseJson;
		})
		.catch((error) => {
			console.log(error);
		});
	}

	prettifyText(text) {
		text = text.replace(/&nbsp;/g, ' ');
		text = text.replace(/&egrave;/g, 'è');
		text = text.replace(/&agrave;/g, 'à');
		text = text.replace(/&ugrave;/g, 'ù');
		text = text.replace(/&ograve;/g, 'ò');
		return text;
	}

	render() {
		const rows = this.dataSource.cloneWithRows(this.state.jsonData.obj || [])

		return (
			<ListView
				dataSource={rows}
				renderRow={(data) => <PostEntry {...data} />}
				enableEmptySections={true}
			/>
		)
	}
}

import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import HTML from 'react-native-fence-html';
import styles from './SinglePost.style';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation'

export default class SinglePost extends Component {
  static defaultProps = {
    id: 0,
    title: '',
    content: ''
  }

  static navigationOptions = {
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,
      title: navigation.state.params.title,
      left: <Ionicons name="ios-arrow-back" style={{marginLeft: 10}} size={40} color="#fff" onPress={() => navigation.dispatch(NavigationActions.back())}/>,
    })
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.id)
  }

  render() {
    const { id, content_full, img, title } = this.props.navigation.state.params
    return (
      <ScrollView>
        <Image source={{ uri: `http://www.langolonerd.it/imgs/${img}`}} />
        <HTML html={ content_full } />
      </ScrollView>
    )
  }
};

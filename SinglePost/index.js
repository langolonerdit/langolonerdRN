import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SinglePost.style';

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
    })
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.id)
  }

  render() {
    const { id, content_full, img, title } = this.props.navigation.state.params
    return (
      <View>
        <Text>
          <Image source={{ uri: `http://www.langolonerd.it/imgs/${img}`}} />
          { content_full }
        </Text>
      </View> 
    )
  }
};
import React, { Component } from 'react';
import { View, TextView, WebView, ScrollView, Text, Image, Dimensions } from 'react-native';
import HTML from 'react-native-fence-html';
import RemoteComponent from './RemoteComponent';
import styles from './SinglePost.style';

var w = Dimensions.get('window').width
var h = Dimensions.get('window').height

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
    const htmlstyle = {
      i: { 
        fontStyle: 'italic'
      },
      code: {
        padding: 4,
        color: '#c7254e',
        backgroundColor: '#f9f2f4',
        borderRadius: 4,
      },
      a: {
        color: '#89229b',
        textDecorationLine: 'none',
      },
      p: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
    const renderers = {
      img: (htmlAttribs, children, passProps) => {
        // fence-html-react-native seems to have inverted width and height
        realw = parseInt(htmlAttribs.width)
        realh = parseInt(htmlAttribs.height)
        ratio = realw/w
        newh = w*realh/realw
        return (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{uri: htmlAttribs.src, width: w, height: newh}}
              style={styles.images}
              {...passProps} />
          </View>
        )
      },
      script: (htmlAttribs, children, passProps) => {
        return (
          <RemoteComponent 
              style={{flex: 1}}
              url={htmlAttribs.src} />
        )
      },
      iframe: (htmlAttribs, children, passProps) => {
        return (
          <RemoteComponent 
            style={{flex: 1}}
            url={htmlAttribs.src} />
        )
      }
    }
    return (  
      <ScrollView style={styles.scrollview}>
        <Image source={{ uri: `http://www.langolonerd.it/imgs/${img}`}} style={{resizeMode: 'cover'}} />
        <HTML 
          html={ content_full }
          htmlStyles={htmlstyle}
          onLinkPress={(evt, href) => console.log(href)}
          renderers={renderers}
          style={{flex: 1}} /> 
        <View style={styles.marginbtm} />
      </ScrollView> 
    )
  }
};
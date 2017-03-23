import React, { Component } from 'react';
import { View, WebView, ScrollView, Text, Image } from 'react-native';
import HTML from 'react-native-fence-html';
import RemoteComponent from './RemoteComponent';
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
    const htmlstyle = {
      i: { 
        fontStyle: 'italic'
      },
      img: { 
        resizeMode: 'cover',
        justifyContent: 'center',
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
      }
    }
    const renderers = {
      img: (htmlAttribs, children, passProps) => {
        // fence-html-react-native seems to have inverted width and height
        h = parseInt(htmlAttribs.width)
        w = parseInt(htmlAttribs.height)
        return (
            <Image
              source={{uri: htmlAttribs.src, width: w, height: h}}
              style={passProps.htmlStyles.img}
              {...passProps} />
        )
      },
      // script: (htmlAttribs, children, passProps) => {
      //   return (
      //     <View>
      //       <RemoteComponent
      //         url={htmlAttribs.src} />
      //     </View>
      //   )
      // },
      // iframe: (htmlAttribs, children, passProps) => {
      //   return (
      //     <View>
      //       <RemoteComponent
      //         url={htmlAttribs.src} />
      //     </View>
      //   )
      // }
    }
    return (  
      <ScrollView style={styles.scrollview}>
        <Image source={{ uri: `http://www.langolonerd.it/imgs/${img}`}} style={{resizeMode: 'cover'}} />
        <HTML 
          html={ content_full }
          htmlStyles={htmlstyle}
          onLinkPress={(evt, href) => console.log(href)}
          renderers={renderers} /> 
      </ScrollView> 
    )
  }
};
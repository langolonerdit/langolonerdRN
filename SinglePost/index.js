import React, { Component } from 'react';
import { View, TextView, WebView, ScrollView, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import HTML from 'react-native-fence-html';
import RemoteComponent from './RemoteComponent';
import styles from './SinglePost.style';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation'

var w = Dimensions.get('window').width - 25
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
      left: <Ionicons name="ios-arrow-back" style={{marginLeft: 10}} size={40} color="#fff" onPress={() => navigation.dispatch(NavigationActions.back())}/>,
    })
  }

  makeTags() {
    tags = 'Tags: '
    kw = this.props.navigation.state.params.keywords
    keywords = kw.split(',')
    keywords.forEach(function(tag) {
      tags += '<a href=http://www.langolonerd.it/?tag=' + tag + ' name="' + tag + '">' + tag + '</a>, '
    })
    return tags.substr(0, tags.length - 2)
  }

  render() {
    const { id, content_full, img, title } = this.props.navigation.state.params
    //tags = this.makeTags()
    const htmlstyle = {
      i: {
        fontStyle: 'italic'
      },
      code: {
        padding: 4,
        color: '#c7254e',
        backgroundColor: '#f9f2f4',
        borderRadius: 4,
        fontFamily: 'monospace',
      },
      a: {
        color: '#89229b',
        textDecorationLine: 'none',
      },
      p: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      blockquote: {
        padding: 15,
        backgroundColor: '#d4d2d2',
        borderRadius: 5,
        fontSize: 13,
        fontFamily: 'monospace',
      },
      pre: {
        fontFamily: 'monospace',
        backgroundColor: '#d4d2d2',
        color: '#333',
        borderRadius: 5,
        padding: 15,
        fontSize: 13,
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

    tags = this.makeTags()
    link_to_full = `<a href='http://www.langolonerd.it/'>Vai all'articolo completo <i class='fa fa-external-link'></i></a>`

    console.log(content_full)

    return (
      <ScrollView style={styles.scrollview}>
        <HTML
          html={ `${content_full}<br><br><p>${tags}</p><hr>${link_to_full}` }
          htmlStyles={htmlstyle}
          onLinkPress={(evt, href) => console.log(href)}
          renderers={renderers}/>
        <View style={styles.marginbtm} />
        <View style={styles.marginbtm} />
      </ScrollView>
    )
  }
};

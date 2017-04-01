import React, { Component } from 'react';
import { View, TextView, WebView, ScrollView, Text, Image, Dimensions, TouchableOpacity, Share, TouchableNativeFeedback } from 'react-native';
import HTML from 'fence-html-rn';
import RemoteComponent from './RemoteComponent';
import styles from './SinglePost.style';
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';
import Communications from 'react-native-communications';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

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
      left: <Ionicons name="md-arrow-back" style={{marginLeft: 20}} size={30} color="#fff" onPress={() => navigation.dispatch(NavigationActions.back())}/>,
      right: (
        <Menu>
          <MenuTrigger>
            <Ionicons name="md-more" style={{marginRight: 20}} size={30} color="#fff" />
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={{
              paddingBottom: 10,
            }}>
            <MenuOption
              style={styles.menu_option}
              value={1} >
              <TouchableNativeFeedback
        				onPress={() =>
                  Share.share({
                    url: `http://www.langolonerd.it/post/${navigation.state.params.id}/${navigation.state.params.slug}/`,
                    message: `${navigation.state.params.title} | L'angolo nerd http://www.langolonerd.it/post/${navigation.state.params.id}/${navigation.state.params.slug}/`})}
        				background={TouchableNativeFeedback.Ripple('#d4d2d2')}
        				delayPressIn={0} >
                <Text style={styles.menu_option_text}><Ionicons name="md-share" size={20}/>{" Condividi "}</Text>
              </TouchableNativeFeedback>
            </MenuOption>
            <MenuOption
              style={styles.menu_option}
              value={2} >
              <TouchableNativeFeedback
        				onPress={() =>
                  Communications.web(`http://www.langolonerd.it/post/${navigation.state.params.id}/${navigation.state.params.slug}/`)}
        				background={TouchableNativeFeedback.Ripple('#d4d2d2')}
        				delayPressIn={0} >
                <Text style={styles.menu_option_text}><Ionicons name="md-open" size={20}/>{" Apri nel browser "}</Text>
              </TouchableNativeFeedback>
            </MenuOption>
          </MenuOptions>
        </Menu>
      ),
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
        realw = parseInt(htmlAttribs.width)
        realh = parseInt(htmlAttribs.height)
        newh = ((realh > 0) ? w*realh : 300)

        // IDEA: create an empty webview,
        // hence push the js in it
        fetch(htmlAttribs.src).then((response) => {
          return response.text();
        }).then((js) => {
          return (
            <WebView
            scalesPageToFit={true}
            startInLoadingState={true}
            injectedJavaScript={js}
            style={{width: w, height: newh}}
            source={{uri: "..."}} />
          )
        })
      },
      iframe: (htmlAttribs, children, passProps) => {
        realw = parseInt(htmlAttribs.width)
        realh = parseInt(htmlAttribs.height)
        newh = w*realh/realw
        return (
            <WebView
              scalesPageToFit={true}
              startInLoadingState={true}
              style={{width: w, height: newh}}
              source={{uri: htmlAttribs.src}} />
        )
      }
    }

    tags = this.makeTags()

    return (
      <ScrollView style={styles.scrollview}>
        <HTML
          html={ `${content_full}<br><hr><p>${tags}</p>` }
          htmlStyles={htmlstyle}
          onLinkPress={(evt, href) => Communications.web(href)}
          renderers={renderers}/>
        <View style={styles.marginbtm} />
        <View style={styles.marginbtm} />
      </ScrollView>
    )
  }
};

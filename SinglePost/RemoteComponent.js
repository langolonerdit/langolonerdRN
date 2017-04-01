import React from 'react';
import ReactNative, { View, Text } from 'react-native';

export default class RemoteComponent extends React.Component {
  state = {};

  componentDidMount() {
    // TODO: Currently disabled
    fetch(this.props.url).then((response) => {
      console.log(response.text());
      return response.text();
    }).then((js) => {
      let factory = eval(js);
      console.log(factory);
      let Component = factory(React,ReactNative);
      this.setState({ Component });
    });
  }

  render() {
    let { Component } = this.state;
    if (Component) {
      return (
        <Component { ...this.props } />
      );
    }
    return (
      <View>
        <Text style={{fontStyle: 'italic', fontFamily: 'monospace'}}>[Componente esterno (video/code-snippet) non caricato, può essere visualizzato dal sito]</Text>
      </View>
    );
  }
}

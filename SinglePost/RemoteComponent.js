import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RemoteComponent extends Component {
  state = {};

  componentDidMount() {
    // TODO: Currently disabled
    // fetch(this.props.url).then((response) => {
    //   return response.text();
    // }).then((js) => {
    //   let factory = eval(js);
    //   console.log(factory);
    //   let Component = factory(React);
    //   this.setState({ Component });
    // });
  }

  render() {
    // let { Component } = this.state;
    // if (Component) {
    //   return <Component { ...this.props } />;
    // }
    return (
      <View>
        <Text style={{fontStyle: 'italic'}}>[Componente esterno (video/code-snippet) non caricato, può essere visualizzato dal sito]</Text>
      </View>
    );
  }
}
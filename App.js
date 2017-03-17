import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './Toolbar.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

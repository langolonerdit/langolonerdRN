import React, { Component } from 'react';
import { ToolbarAndroid } from 'react-native';

export default class Toolbar extends Component {
  render() {
    return (
    	<ToolbarAndroid
	      style={{backgroundColor: '#545d52', height: 56}}
	      logo={require('./app_logo.png')}
	      actions={[{title: 'menu 0'}, {title: 'menu 1'}, {title: 'menu 2'}]}
	      title="L'angolo nerd"
	    />
	  );
  }
}
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import DrawerEntry from './entry';

class DrawerWrapper extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.drawer_container}>
        <View style={styles.drawer_header}>
      		<Image
      			style={styles.drawer_logo}
      			source={require('../assets/icon_round.png')}
      		/>
      		<View style={{flex:1, flexDirection:'row', alignItems: 'center', marginRight: 20}}>
      			<Text style={styles.drawer_title}>L'angolo nerd</Text>
            <Ionicons name='md-settings' size={20} color="#fff"/>
      		</View>
      	</View>
        <View>
          {
            this.props.navigation.state.routes.map(route => <DrawerEntry key={route.key} name={route.routeName} />)
          }
        </View>
      </View>
    );
  }
}

export default DrawerWrapper;

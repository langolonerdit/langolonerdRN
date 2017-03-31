import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PostsList from './';
import SinglePost from '../SinglePost/';
import { Ionicons } from '@expo/vector-icons';

const Router = StackNavigator({
  Home: { screen: PostsList },
  Post: { screen: SinglePost },
}, {
  navigationOptions: {
    header: ({ state, setParams, navigate, dispatch })  => ({
      style: {
        backgroundColor: '#009587',
        marginTop: 24,
      },
      left: (
        <Ionicons name="md-menu" style={{marginLeft: 20}} size={30} color="#fff" onPress={() => navigate('DrawerOpen')}/>
      ),
      titleStyle: {
        color: '#ffffff',
      },
      tintColor: '#ffffff',
    })
  }
});

export default Router;

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeRouter from '../PostsList/router';
import SinglePost from '../SinglePost/';
import DrawerWrapper from './';

const drawerConfig = {
  contentComponent: DrawerWrapper,
};

const defaultRoutes = {
  Home: { screen: HomeRouter },
  Post: { screen: SinglePost },
}

class AsyncDrawer extends Component {
  constructor(props) {
    super(props);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.state = { DrawerRouter: DrawerNavigator(defaultRoutes, drawerConfig) }
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    fetch('http://www.langolonerd.it/api/get_categories.php', {method: 'GET'})
    .then(res => res.json())
    .then(categories => {
      const routesConfig = categories.reduce(
        (prev, cat) => {
          prev[cat.nome] = { screen: HomeRouter }
          return prev;
        }, { Home: { screen: HomeRouter } }
      );
      this.setState({DrawerRouter: DrawerNavigator(routesConfig, drawerConfig)})
    })
    .catch((error) => {
      console.log("ERROR: " + error);
    });
  }

  render() {
    const { DrawerRouter } = this.state;
    return (
      <DrawerRouter />
    )
  }
}

export default AsyncDrawer;

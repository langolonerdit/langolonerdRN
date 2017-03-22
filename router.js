import { StackNavigator } from 'react-navigation';
import PostsList from './PostsList/';

const Router = StackNavigator({
  Home: { screen: PostsList },
}, {
  navigationOptions: {
    header: {
      style: {
        backgroundColor: '#009587',
      }
    }
  }
});

export default Router;

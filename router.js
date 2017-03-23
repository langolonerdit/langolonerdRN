import { StackNavigator } from 'react-navigation';
import PostsList from './PostsList/';
import SinglePost from './SinglePost/';

const Router = StackNavigator({
  Home: { screen: PostsList },
  Post: { screen: SinglePost },
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

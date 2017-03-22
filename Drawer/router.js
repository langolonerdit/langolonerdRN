import { DrawerNavigator } from 'react-navigation';
import HomeRouter from '../PostsList/router';

const Drawer = DrawerNavigator({
  Home: { screen: HomeRouter },
})

export default Drawer;

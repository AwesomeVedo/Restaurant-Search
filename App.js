import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SingleResult from './src/screens/SingleResult';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Single: SingleResult,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search',
  }
});

export default createAppContainer(navigator);
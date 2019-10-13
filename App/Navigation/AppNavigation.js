import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen';
import RotatePictureScreen from '../Containers/RotatePictureScreen';
import ProductRecommendationScreen from '../Containers/ProductRecommendationScreen';
import styles from './Styles/NavigationStyles';
import { Colors } from '../Themes';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    RotatePictureScreen: { screen: RotatePictureScreen },
    ProductRecommendationScreen: { screen: ProductRecommendationScreen }
  },
  {
    // Default config for all screens
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: Colors.snow
    }
  }
);

export default createAppContainer(PrimaryNav);

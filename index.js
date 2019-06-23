import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import imageSlider from './src/screens/imageSlider/imageSlider.js'
import verticalTimeline from './src/screens/verticalTimeline/verticalTimeline'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.disableYellowBox = true;

const root = createStackNavigator(
  {
    Slider: {
        screen: imageSlider
    },
    VerticalTimeline :{
        screen: verticalTimeline
    }
  },
  {
    initialRouteName: 'Slider',
    headerMode: 'none',
  }
);

AppRegistry.registerComponent(appName, () => createAppContainer(root));
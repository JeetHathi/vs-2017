import { StackNavigator } from 'react-navigation';
import React from 'react';
import { View, StatusBar } from 'react-native';
import HomeScreen from './HomeScreen';
import WIPScreen from './WIPScreen';
import ContactUsScreen from './ContactUsScreen';
import AboutUsScreen from './AboutUsScreen';

const Routes = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	WIP: {
		screen: WIPScreen
	},
	ContactUs: {
		screen: ContactUsScreen
	},
	AboutUs: {
		screen: AboutUsScreen
	}
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Routes />
      </View>
    );
  }
}
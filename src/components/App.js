import { StackNavigator } from 'react-navigation';	
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

export default Routes;
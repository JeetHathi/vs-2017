import { StackNavigator } from 'react-navigation';	
import HomeScreen from './HomeScreen';
import WIPScreen from './WIPScreen';

const Routes = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	WIP: {
		screen: WIPScreen
	}
});

export default Routes;
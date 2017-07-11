import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';	

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home'
	};

	render() {
		return (
			<View>
				<Text onPress={() => this.props.navigation.navigate('WIP')}>
					Open up App.js to start working on your app! This is actually from the components directory. Woo hoo!
				</Text>
			</View>
		);
	}
}

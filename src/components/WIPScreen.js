import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';	

export default class WIPScreen extends React.Component {
	static navigationOptions = {
		title: 'WIP'
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					WIP
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontWeight: 'bold',
		fontSize: 75
	}
});
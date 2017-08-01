import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';	

export default class RegisterScreen extends React.Component {
	static navigationOptions = {
		title: 'Register'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text>
				This is the register screen.
			</Text>
		);
	}
}

const styles = StyleSheet.create({});
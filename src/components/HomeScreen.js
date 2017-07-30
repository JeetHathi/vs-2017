import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';	

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home2'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.rootView}>
				<View style={styles.buttonContainer}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('AboutUs')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>About us</Text>
						</Image>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Events</Text>
						</Image>
					</TouchableHighlight>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Register</Text>
						</Image>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Sponsors</Text>
						</Image>
					</TouchableHighlight>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('ContactUs')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Contact us</Text>
						</Image>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Committee</Text>
						</Image>
					</TouchableHighlight>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Gallery</Text>
						</Image>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => console.warn("WTF is going on")}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Developers</Text>
						</Image>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rootView: {
		flexDirection: 'column',
		flex: 1,
		width: Dimensions.get('window').width
	},
	buttonContainer: {
		flexDirection: 'row',
		flex: 1,
		width: Dimensions.get('window').width,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	buttonImage: {
		height: 100,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
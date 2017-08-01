import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';	

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.rootView}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('AboutUs')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>About us</Text>
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Events</Text>
						</Image>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Register</Text>
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Sponsors</Text>
						</Image>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('ContactUs')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Contact us</Text>
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Committee</Text>
						</Image>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Gallery</Text>
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('WIP')}>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Developers</Text>
						</Image>
					</TouchableOpacity>
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
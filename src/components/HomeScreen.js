import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';	

/*
class NavigationButton extends React.Component {
	constructor(props) {
		super(props);
		this.text = this.props.text;
		this.imgSrc = this.props.imgSrc;
	}
	render() {
		console.log("Image: " + this.imgSrc);
		let image = require(this.imgSrc);
		return (
			<View>
				<Image
					source={image}
					style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
					<Text>{this.text}</Text>
				</Image>
			</View>
		);
	}
}
*/

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
				<Text>Started</Text>
				<View style={styles.buttonContainer}>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 1</Text>
						</Image>
					</View>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 2</Text>
						</Image>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 3</Text>
						</Image>
					</View>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 4</Text>
						</Image>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 5</Text>
						</Image>
					</View>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 6</Text>
						</Image>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 7</Text>
						</Image>
					</View>
					<View>
						<Image
							source={require('../img/circleplaceholder.png')}
							style={{height: 100, width: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text>Button 8</Text>
						</Image>
					</View>
				</View>
				<Text>Ended</Text>
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
	}
});
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Communications from 'react-native-communications';
import { StackNavigator } from 'react-navigation';	

export default class ContactUsScreen extends React.Component {
	static navigationOptions = {
		title: 'Contact us'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.rootView} >
				<Image
					style={{width: 100, height: 100}}
					source={require('../img/circleplaceholder.png')} />
				<Text style={styles.text}>
					Bardoli - Navsari Road, Isroli, Afwa, Bardoli, Surat, Gujarat 394620 (copied from Google Maps)
				</Text>
				<Text style={styles.text} onPress={() => Communications.phonecall("+91 92280 00867", true)}>
					+91 92280 00867
				</Text>
				<Text style={styles.text} onPress={() => Communications.phonecall("+91 92280 00867", true)}>
					02622 290 933
				</Text>
				<Text style={styles.text} onPress={() => Communications.email(["fetr.bardoli@gmail.com"], null, null, null, null)}>
					fetr.bardoli@gmail.com
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rootView: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		textAlign: 'center'
	}
});
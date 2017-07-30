import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';	

export default class AboutUsScreen extends React.Component {
	static navigationOptions = {
		title: 'About us'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<Text style={styles.text}>
	        Sir Mokshagundam Visveswaraiah (15 September 1861 TO 14 April 1962) was a notable Indian engineer,scholar, statesman and the Diwan of Mysore during 1912 to 1918. He was a recipient of the Indian Republic's highest honor, the Bharat Ratna, in 1955. He was knighted as a Commander of the British Indian Empire by King George V for his myriad contributions to the public good. Every year, 15 September is celebrated as Engineer's Day in India in his memory. He is held in high regard pre-eminent engineer of India. He was the chief designer of the flood protection system for the city of Hyderabad, as well as the chief engineer responsible for the construction of the Krishna Raja Sagara dam in Mysore.
					{"\n\n"}
					Since the last five years we have celebrated "Visvesmruti-2012", "Visvesmruti-2013", "Visvesmruti-2014", "Visvesmruti-2015" and "Visvesmruti-2016"in the memory of Sir Mokshagundam Visveswaraiah. Just likes the previous year, our institute has conceptualized "Visvesmruti-2017" on 16th-17th September expecting promising students from various colleges. With great pleasure and enthusiasm we feel proud to proclaim our upcoming techfest "Visvesmruti-2017". We have organized this technical event to cultivate innovative technical abilities among the learners. And what can be a better platform than this event for the learners to give an outlet to their zest and gusto.
					{"\n\n"}
					We have aimed to provide a sound platform to learners where they can realize their latent potential and sharpen their practical technological skills. This event wishes to be a forum for like minded learners where they can interact and exchange current technical knowledge. Our institute wants to mold the students into futuristic technocrats and to enable them to cop up the challenges with the qualities of confidence, sportsmanship spirit, innovative thinking, analytical abilities etc. Moreover this techfest focuses also on spontaneous expression of creativity through various programs and competitions. So, let's witness the fervor of the learners in the lively exhibition of their power- packed performances.
				</Text>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontSize: 16
	}
});
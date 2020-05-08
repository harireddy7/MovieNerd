import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import goToAuth from '../navigation/goToAuth';
import goToCore from '../navigation/goToCore';

const LandingScreen = props => {
	const { from } = props;

	// if (from === 'ROOT') {
	// 	goToAuth();
	// } else {
	// 	goToCore();
	// }

	setTimeout(() => goToAuth(), 2000);

	return (
		<View style={styles.container}>
			<Text style={styles.message}>Loading...</Text>
		</View>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#101321'
	},
	message: {
		fontSize: 30,
		color: 'white'
	}
});

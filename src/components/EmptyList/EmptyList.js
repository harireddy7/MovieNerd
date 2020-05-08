import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmptyList = () => (
	<View>
		<Text style={styles.container}>Empty List! Add Some!!</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		fontStyle: 'italic',
		textAlign: 'center',
		color: '#777',
		marginTop: 10
	}
});

export default EmptyList;

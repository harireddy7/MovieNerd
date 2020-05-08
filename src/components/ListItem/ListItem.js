import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

const ListItem = ({ value, onItemPress }) => {
	return (
		<TouchableNativeFeedback onPress={onItemPress}>
			<View style={styles.container}>
				<Image source={value.image} style={styles.placeImage} />
				<Text>{value.name}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#eee',
		marginBottom: 5,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	placeImage: {
		width: 50,
		height: 50,
		marginRight: 20,
		borderRadius: 4
	}
});

export default ListItem;

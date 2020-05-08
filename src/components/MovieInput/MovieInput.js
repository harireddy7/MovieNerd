import React from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const PlaceInput = ({ value, textChangeHandler, pressHandler }) => (
	<View style={styles.inpBtn}>
		<TextInput
			style={styles.textField}
			value={value}
			placeholder="Add a Movie to Watchlist"
			onChangeText={textChangeHandler}
		/>
		<Button title="Add " color="green" disabled={!value} onPress={pressHandler} />
	</View>
);

const styles = StyleSheet.create({
	inpBtn: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
		// borderWidth: 1
	},
	textField: {
		width: '80%',
		borderBottomWidth: 1,
		borderBottomColor: 'indigo',
		padding: 0,
		marginRight: 10
	}
});

export default PlaceInput;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, StyleSheet, TextInput, Text, TouchableHighlight, Keyboard, Image } from 'react-native';

import useNavigationButtonPressed from '../../navigation/useNavigationButtonPressed';
import logoutFromNavBar from '../../navigation/logoutFromNavBar';

import { addMovie } from '../../store/actions';

const AddMovieScreen = ({ componentId }) => {
	const [ movie, setMovie ] = useState('');
	useNavigationButtonPressed(logoutFromNavBar, [ componentId ]);

	const dispatch = useDispatch();

	const textChangeHandler = movie => setMovie(movie);

	const addToWatchlist = () => {
		dispatch(addMovie(movie));
		setMovie('');
		Keyboard.dismiss();
	};

	return (
		<View style={styles.container}>
			<Image source={require('../../assets/movienerd-logo.png')} style={styles.logo} />
			<TextInput
				style={styles.textField}
				placeholder="Add a Movie to Watchlist"
				value={movie}
				onChangeText={textChangeHandler}
			/>
			<TouchableHighlight
				style={[ styles.button, !movie && styles.disabledBtn ]}
				disabled={!movie}
				underlayColor="#aaa"
				onPress={addToWatchlist}
			>
				<Text style={styles.btnText}>ADD</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		minWidth: 150,
		// borderWidth: 1,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green'
	},
	logo: {
		width: 50,
		height: 50,
		marginBottom: 50
	},
	textField: {
		width: '80%',
		minWidth: 150,
		marginBottom: 20,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 15
	},
	button: {
		backgroundColor: '#390',
		padding: 10,
		width: '80%',
		minWidth: 150,
		borderRadius: 10
	},
	disabledBtn: {
		backgroundColor: '#ccc'
	},
	btnText: {
		textAlign: 'center',
		fontSize: 18,
		color: 'white'
	}
});

export default AddMovieScreen;

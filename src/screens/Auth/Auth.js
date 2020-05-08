import React from 'react';
import { Text, View, Button } from 'react-native';
import globalStyles from '../../styles/styles';

const Auth = ({ params }) => (
	<View style={globalStyles.root}>
		<Button title="Login" color="green" />
	</View>
);

export default Auth;

// const styles = StyleSheet.create({
// 	root: {
// 		flex: 1,
// 		backgroundColor: '#333',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });

import React from 'react';
import { View, Button } from 'react-native';
import globalStyles from '../../styles/styles';
import goToCore from '../../navigation/goToCore';

const Login = () => (
	<View style={globalStyles.root}>
		<Button title="Login" color="green" onPress={goToCore} />
	</View>
);

export default Login;

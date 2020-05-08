import React from 'react';
import { View, Button } from 'react-native';
import globalStyles from '../../styles/styles';
import goToCore from '../../navigation/goToCore';

const Register = () => (
	<View style={globalStyles.root}>
		<Button title="Register" color="#103" onPress={goToCore} />
	</View>
);

export default Register;

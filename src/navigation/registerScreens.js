import React from 'react';
import { Navigation } from 'react-native-navigation';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import LandingScreen from '../screens/LandingScreen';
import AddMovieScreen from '../screens/Core/AddMovieScreen';
import WatchlistScreen from '../screens/Core/WatchlistScreen';
import ViewDetailsScreen from '../screens/Core/ViewDetailsScreen';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const WrappedProvider = Component => props => (
	<Provider store={store}>
		<Component {...props} />
	</Provider>
);

export default () => {
	Navigation.registerComponent('movienerd.LandingScreen', () => LandingScreen);
	Navigation.registerComponent('movienerd.LoginScreen', () => Login);
	Navigation.registerComponent('movienerd.RegisterScreen', () => Register);
	Navigation.registerComponent('movienerd.AddMovieScreen', () => WrappedProvider(AddMovieScreen));
	Navigation.registerComponent('movienerd.WatchlistScreen', () => WrappedProvider(WatchlistScreen));
	Navigation.registerComponent('movienerd.ViewDetailsScreen', () => WrappedProvider(ViewDetailsScreen));
	Navigation.setDefaultOptions({
		topBar: {
			visible: false
		},
		bottomTabs: {
			backgroundColor: 'green',
			titleDisplayMode: 'alwaysShow'
		},
		bottomTab: {
			textColor: '#ccc',
			iconColor: '#ccc',
			selectedTextColor: 'white',
			selectedIconColor: 'white'
		}
	});
};

// 101321

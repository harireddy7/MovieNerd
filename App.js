import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigation/registerScreens';

// Register Screens
registerScreens();

// Start the App
Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				id: 'LandingScreen',
				name: 'movienerd.LandingScreen',
				passProps: {
					from: 'ROOT'
				}
			}
		}
	});
});

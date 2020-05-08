import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default async () => {
	const registerIcon = await Icon.getImageSource('person-add');
	const loginIcon = await Icon.getImageSource('exit-to-app');
	try {
		Navigation.setRoot({
			root: {
				bottomTabs: {
					id: 'bottomNavBarAuth',
					children: [
						{
							stack: {
								children: [
									{
										component: {
											id: 'LoginScreen',
											name: 'movienerd.LoginScreen',
											options: {
												bottomTab: {
													text: 'Login',
													icon: loginIcon
												}
											}
										}
									}
								]
							}
						},
						{
							stack: {
								children: [
									{
										component: {
											id: 'RegisterScreen',
											name: 'movienerd.RegisterScreen',
											options: {
												bottomTab: {
													text: 'Register',
													icon: registerIcon
												}
											}
										}
									}
								]
							}
						}
					]
				}
			}
		});
	} catch (er) {
		// TODO:: Add 404 screen in case of errors
		console.log(er);
	}
};

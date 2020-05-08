import { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';

export default (btnHandler, dependencies) => {
	useEffect(() => {
		const buttonListener = Navigation.events().registerNavigationButtonPressedListener(btnHandler);
		return () => {
			buttonListener.remove();
		};
	}, dependencies);
};

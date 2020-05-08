import { Navigation } from 'react-native-navigation';

export default (componentId, selectedMovie) =>
	Navigation.push(componentId, {
		component: {
			id: 'ViewDetailsScreen',
			name: 'movienerd.ViewDetailsScreen',
			passProps: {
				selectedMovie,
				componentId
			},
			options: {
				topBar: {
					visible: true,
					background: {
						color: '#101321'
					},
					backButton: {
						color: 'white'
					}
				},
				bottomTabs: {
					visible: false
				}
			}
		}
	});

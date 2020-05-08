import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const getDefaultOptions = () => ({
	visible: true,
	background: {
		color: 'green'
	},
	rightButtons: [
		{
			id: 'logoutBtn',
			color: '#101321',
			text: 'Logout'
		}
	]
});

export default async () => {
	const addIcon = await Icon.getImageSource('playlist-add');
	const listIcon = await Icon.getImageSource('playlist-play');
	try {
		Navigation.setRoot({
			root: {
				bottomTabs: {
					id: 'bottomNavBarCore',
					children: [
						{
							stack: {
								children: [
									{
										component: {
											id: 'AddMovieScreen',
											name: 'movienerd.AddMovieScreen',
											options: {
												bottomTab: {
													text: 'Add',
													icon: addIcon
												},
												topBar: {
													...getDefaultOptions(),
													elevation: 0
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
											id: 'WatchlistScreen',
											name: 'movienerd.WatchlistScreen',
											options: {
												bottomTab: {
													text: 'Watchlist',
													icon: listIcon
												},
												topBar: {
													...getDefaultOptions()
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

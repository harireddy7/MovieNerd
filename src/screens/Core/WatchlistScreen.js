import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import useNavigationButtonPressed from '../../navigation/useNavigationButtonPressed';
import logoutFromNavBar from '../../navigation/logoutFromNavBar';
import goToDetails from '../../navigation/goToDetails';

import MovieList from '../../components/MovieList/MovieList';

import globalStyles from '../../styles/styles';

const WatchlistScreen = ({ componentId }) => {
	useNavigationButtonPressed(logoutFromNavBar, [ componentId ]);

	const { watchlist } = useSelector(state => state.movies) || { watchlist: [] };

	return (
		<View style={[ globalStyles.root, { backgroundColor: 'green' } ]}>
			<MovieList list={watchlist} onItemSelected={selectedMovie => goToDetails(componentId, selectedMovie)} />
		</View>
	);
};

export default WatchlistScreen;

{
	/* <Text>WatchlistScreen</Text> */
}
{
	/* <Button title="View Detail" color="gray" onPress={() => goToDetails(componentId, '12Monkeys')} /> */
}

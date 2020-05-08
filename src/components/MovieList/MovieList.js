import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';
import EmptyList from '../EmptyList/EmptyList';

const MovieList = ({ list, onItemSelected }) => {
	return (
		<FlatList
			data={list}
			style={styles.listContainer}
			renderItem={({ item }) => <ListItem value={item} onItemPress={() => onItemSelected(item)} />}
			ListEmptyComponent={EmptyList}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		width: '90%',
		margin: 15
	}
});

export default MovieList;

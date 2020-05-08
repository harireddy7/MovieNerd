import { ADD_MOVIE, DELETE_MOVIE } from './actionTypes';

// movie: { key, name, image }

export const addMovie = movie => {
	return {
		type: ADD_MOVIE,
		movie
	};
};

export const deleteMovie = key => {
	return {
		type: DELETE_MOVIE,
		key
	};
};

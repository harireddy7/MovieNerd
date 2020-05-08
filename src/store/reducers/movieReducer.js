import coverImage from '../../assets/pattinson.jpg';
import { ADD_MOVIE, DELETE_MOVIE } from '../actions/actionTypes';
import formatName from '../../helpers/FormatName';

const initState = {
	watchlist: []
};

export default (state = initState, action) => {
	switch (action.type) {
		case ADD_MOVIE: {
			return {
				...state,
				watchlist: [
					...state.watchlist,
					{ key: Math.random().toString(), name: formatName(action.movie), image: coverImage }
				]
			};
		}
		case DELETE_MOVIE: {
			return {
				...state,
				watchlist: [ ...state.watchlist ].filter(({ key }) => key !== action.key)
			};
		}
		default:
			return state;
	}
};

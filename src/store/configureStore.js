/* global __DEV__ */

import { combineReducers, createStore, compose } from 'redux';
import movieReducer from './reducers/movieReducer';

const rootReducer = combineReducers({
	movies: movieReducer
});

let composeEnhancers = compose;

if (__DEV__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	return createStore(rootReducer, composeEnhancers());
};

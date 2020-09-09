import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import usersReducer from './usersReducer.js';
import newsReducer from './newsReducer.js';
import authReducer from './authReducer.js';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer.js';

let reducers = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	users: usersReducer,
	news: newsReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
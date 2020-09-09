import {setUserThunk} from './authReducer.js';

let initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch(action.type){
		case 'initialization':
			return {...state, initialized: true}
		default:
			return state;
	}
}

export const initialization = () => ({type: 'initialization'});

export const initializationThunk = () => (dispatch) => {
	let promise = dispatch(setUserThunk());

	Promise.all([promise]).then(() => {
		dispatch(initialization());
	});

}

export default appReducer;
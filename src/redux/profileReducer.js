import api from '../api/api.js';

let initialState = {
	posts: [
		{text: 'Hello', like: 0},
		{text: 'Lorem ipsum dolor', like: 0},
	],
	info: {name: 'Sonya', birth: '2 august', city: 'Lviv', education: 'designer', web: 'https://www.youtube.com'},
	profile: null,
	loading: false,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch(action.type){
		case 'addPost':
			return {...state, posts: [...state.posts, {text: action.text, like: 0}]}
		case 'setProfile':
			return {...state, profile: action.profile}
		case 'toggleLoading':
			return {...state, loading: action.loading}
		case 'changeStatus':
			return {...state, status: action.text};
		default: 
			return state;
	}
};

export const addPost = (text) => ({type: 'addPost', text});
export const setProfile = (profile) => ({type: 'setProfile', profile});
export const toggleLoading = (loading) => ({type: 'toggleLoading', loading});
export const changeStatus = (text) => ({type: 'changeStatus', text});

export const setProfileThunk = (id) => async (dispatch) => {
		dispatch(toggleLoading(true));
		let data = await api.setProfile(id);
		dispatch(toggleLoading(false));
		dispatch(setProfile(data));
};

export const getStatusThunk = (id) => async (dispatch) => {
		let responce = await api.getStatus(id);
		dispatch(changeStatus(responce));
}

export const putStatusThunk = (status) => (dispatch) => {
		api.putStatus(status);
	}

export default profileReducer;
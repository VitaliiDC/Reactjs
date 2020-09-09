import api from '../api/api.js';
import {stopSubmit} from 'redux-form';

let initialState = {
	id: null,
	email: null,
	login: null,
	auth: false,
	captcha: false,
	captchaUrl: '',
}

const authReducer = (state = initialState, action) => {
	switch(action.type){
		case 'setUser':
			return {...state, ...action.data, auth: action.auth};
		case 'setCaptcha':
			return {...state, captcha: action.value}
		case 'setCaptchaUrl':
			return {...state, captchaUrl: action.value}
		default:
			return state;
	}
}

export const setUser = (id, email, login, auth) => ({type: 'setUser', data:{id, email, login}, auth});
export const setCaptcha = (value) => ({type: 'setCaptcha', value});
export const setCaptchaUrl = (value) => ({type: 'setCaptchaUrl', value});

export const setUserThunk = () => async (dispatch) => {
	let data = await api.getAuth();
	if(data.resultCode === 0){
		dispatch(setUser(data.data.id, data.data.email, data.data.login, true));
	}
}

export const loginThunk = (email, password, remember = false, captcha) => async (dispatch) => {
	let responce = await api.login(email, password, remember, captcha);
	if(responce.data.resultCode === 0){
		dispatch(setUserThunk());
	}else if(responce.data.resultCode === 1){
		dispatch(stopSubmit('login', {_error: 'email or password is incorrect*'}))
	}else if(responce.data.resultCode === 10){
		api.captcha().then(responce => {dispatch(setCaptchaUrl(responce.data.url)); dispatch(setCaptcha(true))});
	}
}

export const logoutThunk = () => async (dispatch) => {
	let responce = await api.logout();
	if(responce.data.resultCode === 0){
		dispatch(setUser(null, null, null, false));
	}
}

export const putPhotoThunk = (url) => (dispatch) => {
	api.putPhoto(url);
}

export default authReducer;
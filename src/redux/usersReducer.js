import api from '../api/api.js';
import {followUnfollow} from '../tools/functions.js';

let initialState = {
	users: [],
	pageSize: 3,
	usersCount: 0,
	currentPage: 1,
	currentPortion: 1,
	portionSize: 10,
	loading: false,
	followRequest: [],
};

let usersReducer = (state = initialState, action) => {
	switch(action.type){
		case 'follow':
			return {...state,users: followUnfollow(state.users, 'id', action.userId, {followed: true})}
		case 'unfollow':
			return {...state,users: followUnfollow(state.users, 'id', action.userId, {followed: false})}
		case 'setUsers':
			return {...state, users: action.users, usersCount: action.usersCount};
		case 'setCurrentPage':
			return {...state, currentPage: action.currentPage};
		case 'setCurrentPortion':
			return {...state, currentPortion: action.currentPortion};
		case 'toggleLoading':
			return {...state, loading: action.loading};
		case 'toggleFollowRequest':
			return {...state, followRequest: action.loading ? [...state.followRequest, action.id] : state.followRequest.filter(id => id != action.id)};
		default: {
			return state;
		}
	}
}

export const follow = (userId) => {return {type: 'follow', userId }};
export const unfollow = (userId) => {return {type: 'unfollow', userId }};
export const setUsers = (users, usersCount) => {return {type: 'setUsers', users, usersCount }};
export const setCurrentPage = (currentPage) => {return {type: 'setCurrentPage', currentPage }};
export const setCurrentPortion = (currentPortion) => {return {type: 'setCurrentPortion', currentPortion }};
export const toggleLoading = (loading) => {return {type: 'toggleLoading', loading}};
export const toggleFollowRequest = (loading, id) => {return {type: 'toggleFollowRequest', loading, id}};

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleLoading(true));
	let data = await api.getUsers(currentPage, pageSize);
	dispatch(toggleLoading(false));
	dispatch(setUsers(data.items, data.totalCount));
}

const followUnfollowThunk = async (dispatch, id, api, action) => {
	dispatch(toggleFollowRequest(true, id));
	let data = await api(id);
	if(data.resultCode == 0){
		dispatch(toggleFollowRequest(false, id));
		dispatch(action(id));
	}
}

export const followThunk = (id) => async (dispatch) => {
	followUnfollowThunk(dispatch, id, api.postFollow, follow);
}

export const unfollowThunk = (id) => async (dispatch) => {
	followUnfollowThunk(dispatch, id, api.deleteFollow, unfollow);
}


export default usersReducer;
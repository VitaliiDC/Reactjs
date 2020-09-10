import * as axios from 'axios';
import {getApiKey} from './apiKeys.js';

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": getApiKey(),
	}
});

const api = {
	getUsers(currentPage = 1, pageSize = 3){return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)},
	postFollow(id){return instance.post(`follow/${id}`).then(response => response.data)},
	deleteFollow(id){return instance.delete(`follow/${id}`).then(response => response.data)},
	setProfile(id){return instance.get(`profile/${id}`).then(response => response.data)},
	getStatus(id){return instance.get(`profile/status/${id}`).then(response => response.data)},
	putStatus(status){return instance.put(`profile/status`, {status: status})},
	getAuth(){return instance.get(`auth/me`).then(response => response.data)},
	login(email, password, remember, captcha){return instance.post(`auth/login`, {email, password, remember, captcha})},
	logout(){return instance.delete(`auth/login`)},
	captcha(){return instance.get(`security/get-captcha-url`)},
	putPhoto(file){debugger; return instance.put(`profile/photo`, {image: file})},
}

export default api;

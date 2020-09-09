export const getProfile = (state) => {
	return state.profile.profile;
}

export const getStatus = (state) => {
	return state.profile.status;
}

export const getLoading = (state) => {
	return state.profile.loading;
}

export const getInfo = (state) => {
	return state.profile.info;
}

export const getPosts = (state) => {
	return state.profile.posts;
}

export const getId = (state) => {
	return state.auth.id;
}

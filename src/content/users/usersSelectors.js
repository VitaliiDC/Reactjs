export const getIsAuth = (state) => {
	return state.auth.auth;
}

export const getUsers = (state) => {
	return state.users.users;
}

export const getPageSize = (state) => {
	return state.users.pageSize;
}

export const getUsersCount = (state) => {
	return state.users.usersCount;
}

export const getCurrentPage = (state) => {
	return state.users.currentPage;
}

export const getCurrentPortion = (state) => {
	return state.users.currentPortion;
}

export const getPortionSize = (state) => {
	return state.users.portionSize;
}

export const getLoading = (state) => {
	return state.users.loading;
}

export const getFollowRequest = (state) => {
	return state.users.followRequest;
}


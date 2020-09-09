export const getMessages = (state) => {
	return state.dialogs.messages;
}

export const getNames = (state) => {
	return state.dialogs.names;
}

export const getAuth = (state) => {
	return state.auth.auth;
}

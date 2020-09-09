export const getCapthcaUrl = (state) => {
	return state.auth.captchaUrl;
}

export const getCaptcha = (state) => {
	return state.auth.captcha;
}

export const getId = (state) => {
	return state.auth.id;
}

export const getAuth = (state) => {
	return state.auth.auth;
}
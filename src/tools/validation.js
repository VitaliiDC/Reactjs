export const didTouch = (value) => {
	if(!value) return 'Field is required';
	return undefined;
}

export const maxLength = (length) => (value) => {
	if(value.length > length) return `Max length is ${length}`;
	return undefined;
}

export const minLength = (length) => (value) => {
	if(value.length < length) return `Min length is ${length}`;
	return undefined;
}
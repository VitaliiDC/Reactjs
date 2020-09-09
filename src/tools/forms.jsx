import React from 'react';
import './forms.css';

export const Input = ({input, meta, ...props}) => {
	return (
		<div className={"form__input" + ' ' + (meta.touched && meta.error ? 'error' : '')}>
			<input {...input} {...props} />
			<span>{meta.error}</span>
		</div>
	);
}


import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './login.css';
import {Input} from '../../tools/forms.jsx';
import {didTouch} from '../../tools/validation.js';

const Login = (props) => {
	return (
		<div className="login__block">
			<form onSubmit={props.handleSubmit}>
				<div className="login__login">
					<Field name="email" type="email" component={Input} validate={[didTouch]} placeholder="email" />
				</div>
				<div className="login__password">
					<Field name="password" type="password" component={Input}  validate={[didTouch]} placeholder="password" />
				</div>
				{props.captcha && <div className="login__captcha">
					<div className={"login__captcha--bg" + ' ' + (props.captchaFocus ? 'active' : '')}><img src={props.captchaUrl} /></div>
					<div className="login__captcha--field"><Field name="captcha" type="text" component={Input} autocomplete="off" placeholder="code" onFocus={() => props.captchaFocusChange(true)} onBlur={() => props.captchaFocusChange(false)} /></div>
				</div>}
				<div className="login__remember">
					<Field name="remember" type="checkbox" component="input" />
					<label htmlFor="remember" >Remember me</label>
				</div>
				{props.error && 
				<div className="login__custom">
					{props.error}
				</div>}
				<div className="login__btn">
					<button>Sign in</button>
				</div>
			</form>
		</div>
	);
}

export default reduxForm({form: 'login'})(Login);
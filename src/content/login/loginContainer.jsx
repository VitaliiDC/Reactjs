import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Login from './login.jsx';
import {loginThunk} from '../../redux/authReducer.js';
import {reset} from 'redux-form';
import {Redirect} from 'react-router-dom';
import {getCapthcaUrl,getCaptcha,getId,getAuth} from './loginSelectors.js';

class loginContainer extends React.Component{

	state = {
		captchaFocus: false,
	}

	captchaFocusChange = (value) => {
		this.setState({
			captchaFocus: value,
		});
	}

	render(){
		if(this.props.isAuth) return <Redirect to={'/profile/' + this.props.id} />
		return <Login {...this.state} captchaFocusChange={this.captchaFocusChange} onSubmit={(data) => {this.props.loginThunk(data.email, data.password, data.remember, data.captcha); this.props.reset('login')}} {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: getAuth(state),
		id: getId(state),
		captcha: getCaptcha(state),
		captchaUrl: getCapthcaUrl(state),
	};
}
const mapDispatchToProps = {loginThunk, reset};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(loginContainer);


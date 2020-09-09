import React from 'react';
import {connect} from 'react-redux';
import Header from './header.jsx';
import api from '../api/api.js';

class AuthContainer extends React.Component{
	render(){
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth,
		login: state.auth.login,
	}
};

export default connect(mapStateToProps, {})(AuthContainer);
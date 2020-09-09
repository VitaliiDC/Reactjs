import React, {useState} from 'react';
import {connect} from 'react-redux';
import Settings from './settings.jsx';
import {logoutThunk, putPhotoThunk} from '../../redux/authReducer.js';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect.js';

const SettingsContainer = (props) => {
	let [logoutWindow, setLogoutWindow] = useState(false);

	return <Settings {...props} logoutWindow={logoutWindow} setLogoutWindow={setLogoutWindow} />
}

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = {logoutThunk, putPhotoThunk};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
	React.memo
)(SettingsContainer);

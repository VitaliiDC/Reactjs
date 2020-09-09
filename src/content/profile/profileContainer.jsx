import React, {useState, useEffect} from 'react';
import {addPost, setProfileThunk, changeStatus, getStatusThunk, putStatusThunk} from '../../redux/profileReducer.js';
import {connect} from 'react-redux';
import Profile from './profile.jsx';
import * as axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect.js';
import {compose} from 'redux';
import {reset} from 'redux-form';
import Loading from '../../tools/loading.jsx';
import {getProfile, getStatus, getLoading, getInfo, getPosts, getId} from './profileSelectors.js';

const ProfileContainer = React.memo((props) => {
	console.log('profile');
	
	let [statusEdit, setStatusEdit] = useState(false);

	let id = props.match.params.id;
	
	useEffect(() => {
		props.setProfileThunk(id);
		props.getStatusThunk(id);
		setStatusEdit(false);
	}, [id]);

	return <>{!props.profile || props.loading ? <Loading /> : <Profile {...props} statusEdit={statusEdit} setStatusEdit={setStatusEdit} putStatusThunk={props.putStatusThunk} img={!props.profile.photos.large ? `https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png` : props.profile.photos.large} />}</>
});

const mapStateToProps = (state) => {
	return {
		profile: getProfile(state),
		status: getStatus(state),
		loading: getLoading(state),
		info: getInfo(state),
		posts: getPosts(state),
		ownId: getId(state),
	}
};

const mapDispatchToProps = {addPost, setProfileThunk, changeStatus, getStatusThunk, putStatusThunk, reset};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect,
)(ProfileContainer);

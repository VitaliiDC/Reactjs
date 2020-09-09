import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, setCurrentPortion, getUsersThunk, unfollowThunk, followThunk} from '../../redux/usersReducer.js';
import Users from './users.jsx';
import Loading from '../../tools/loading.jsx';
import {getIsAuth, getUsers,getPageSize,getUsersCount,getCurrentPage,getCurrentPortion,getPortionSize,getLoading,getFollowRequest} from './usersSelectors.js';

class UsersContainer extends React.Component {

	componentDidMount(){
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
	}

	pageChange = (i) => {
		this.props.setCurrentPage(i);
		this.props.getUsersThunk(i, this.props.pageSize);
	}

	render(){
		return	this.props.loading ? <Loading /> : <Users {...this.props} pageChange = {this.pageChange} />
				}
		}

const mapStateToProps = (state) => {
	return {
		isAuth: getIsAuth(state),
		users: getUsers(state),
		pageSize: getPageSize(state),
		usersCount: getUsersCount(state),
		currentPage: getCurrentPage(state),
		currentPortion: getCurrentPortion(state),
		portionSize: getPortionSize(state),
		loading: getLoading(state),
		followRequest: getFollowRequest(state),
	}
}

const mapDispatchToProps = {setCurrentPage, setCurrentPortion, getUsersThunk, unfollowThunk, followThunk};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

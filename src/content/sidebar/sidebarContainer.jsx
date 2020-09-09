import React from 'react';
import Sidebar from './sidebar.jsx';
import {compose} from 'redux';
import {connect} from 'react-redux';

class SidebarContainer extends React.Component{
	render(){
		return <Sidebar {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return ({
		id: state.auth.id,
	});
}

const mapDispatchToProps = {};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(SidebarContainer);
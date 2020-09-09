import React from 'react';
import Dialogs from './dialogs.jsx';
import {addMessage} from '../../redux/dialogsReducer.js';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect.js';
import {reset} from 'redux-form';
import {getMessages, getNames, getAuth} from './dialogsSelectors.js';

class DialogsContainer extends React.Component{
	render(){
		return <Dialogs {...this.props} />
	}
}
const mapStateToProps = (state) => {
	return {
		messages: getMessages(state),
		names: getNames(state),
		isAuth: getAuth(state),
	}
}

const mapDispatchToProps = {addMessage, reset};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(DialogsContainer);
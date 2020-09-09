import React from 'react';
import {connect} from 'react-redux';
import News from './news.jsx';
import {getNew} from './newsSelectors.js';

const mapStateToProps = (state) => {
	debugger;
	return {
		new: getNew(state),
	}
}

const mapDispatchToProps = {}

const newsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default newsContainer;
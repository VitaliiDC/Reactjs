import React from 'react';

const News = (props) => {

	const New = (props) => {
		return (
			<div>{props.title}</div>
		);
	}

	const newMap = props.new.map(n => <New title={n.title} />);

	return(
		<div>{newMap}</div>
	)
}

export default News;
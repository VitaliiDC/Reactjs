import React from 'react';
import './post.css';


const Post = (props) => {

	return(
		<div className="post">
			<div className="flex">
				<div className="avatar avatar--p"></div>
				<p className="post__text">{props.text}</p>
			</div>
			<button className="post__like">Like {props.like}</button>
		</div>
	);
};

export default Post;
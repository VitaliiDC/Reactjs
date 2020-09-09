import React from 'react';
import './profile.css';
import Post from './post/post.jsx';
import {Field, reduxForm} from 'redux-form';


const Profile = (props) => {
	
	let postMap = props.posts.map((post) => <Post like={post.like} text={post.text} />);

	let addPost= (data) => {
		if(data.textarea.trim() != ''){
			props.addPost(data.textarea);
			props.reset('addPost');
		}
	}
	
	let inputText = (e) => {
		if(e.currentTarget.value.length <= 50){
			props.changeStatus(e.currentTarget.value);
		}
	}

	let onKeyDownStatus = (e) => {
		if(e.keyCode === 13){
			props.setStatusEdit(false);
			props.putStatusThunk(props.status);
		}
	}

	const imgStyle = {
			background: 'url('+props.img +') center center / cover no-repeat',
		}

	return(
		<div className={props.loading ? 'content load' : 'content'}>
			<div className="net">
				<div className="top"></div>
				<div className="info">
					<div style={imgStyle} className="avatar"></div>
					<div className="others">
						<p className="name">{props.profile.fullName}</p>
						{props.statusEdit && props.ownId == props.match.params.id ? <input className="status status--edit" onChange={inputText} autoFocus onKeyDown={onKeyDownStatus} onBlur={() => {props.setStatusEdit(false); props.putStatusThunk(props.status)}} value={props.status} /> : <p className="status" onClick={() => props.setStatusEdit(true)}>{props.status}</p>}
						<p className="birth">{'Date of birth: '+props.info.birth}</p>
						<p className="city">{'City: '+props.info.city}</p>
						<p className="education">{'Education: '+props.info.education}</p>
						<p className="web">Web Site: <a target="_blank" href={props.info.web}>{props.info.web}</a></p>
					</div>
				</div>
				<div className="posts">
					<p>My posts</p>
					<AddPostRedux onSubmit={data => addPost(data)} {...props} />
				</div>
				<div className="news">
					{postMap}
				</div>
			</div>
		</div>
	);
};


const AddPost = (props) => {
	const onKeyDownAddPost = (e) => {
		if(e.keyCode == 13){
			props.handleSubmit();
			e.preventDefault();
		}
	}

	return (
		<form onSubmit={props.handleSubmit}>
			<Field onKeyDown={onKeyDownAddPost} name="textarea" component="textarea" placeholder="your news..." />
			<button className="posts__button">Send</button>
		</form>
	)
}

const AddPostRedux = reduxForm({form: 'addPost'})(AddPost);

export default Profile;
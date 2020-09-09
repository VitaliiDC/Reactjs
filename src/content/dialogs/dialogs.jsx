import React from 'react';
import './dialogs.css';
import {Redirect, NavLink} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

const Dialogs = (props) => {

	let addMessage = (data) => {
		if(data.textarea.trim() != ''){
			props.addMessage(data.textarea);
			props.reset('dialogs');
		}
	}

	const Message = (props) => {
		return(
			<div className="dialogs__message">
				<div className="dialogs__avatar">
					<div className="dialogs__photo avatar"></div>
					<div className="dialogs__name">{props.name}</div>
				</div>
				<div className="dialogs__text">{props.text}<span></span></div>
			</div>
		);
	};

	const Name = (props) => {
		return(
			<li><NavLink className='dialogs__link' activeClassName="dialogs__active" to={"dialogs/" + props.id}><span className="dialogs__photoName avatar"></span><span>{props.name}</span></NavLink></li>
		);
	};

	let messageMap = props.messages.map((message) => <Message name={message.name} text={message.text} />);
	let nameMap = props.names.map((name) => <Name name={name.name} id={name.id} />);

	const SendMessage = (props) => {
		return (
			<form onSubmit={props.handleSubmit} className="dialog__sendMessage">
				<Field name="textarea" component="input" className="dialogs__input" placeholder="Enter a message..." />
				<button className="posts__button dialogs__button" >Send</button>
			</form>
		)
}
	
	const SendMessageRedux = reduxForm({form: 'dialogs'})(SendMessage);

	return(
		<div className="dialogs">
			<div className="dialogs__column dialogs__column-f">
				<ul className="dialogs__list">
					{nameMap}
				</ul>
			</div>
			<div className="dialogs__column">
			<div className="dialogs__messageWindow">{messageMap}</div>
				<SendMessageRedux onSubmit={data => addMessage(data)} />
			</div>
		</div>
	);
};



export default Dialogs;

import React from 'react';
import './settings.css';

const Settings = (props) => {

	const uploadFile = (e) => {
		let file = e.target.files;
		props.putPhotoThunk(file[0]);
	}

	return (
		<div className="settings">
			<div className="settings__photo">
				<input onChange={uploadFile} type="file" />
			</div>
			<div className="settings__logout">
				<button onClick={() => props.setLogoutWindow(true)} >Logout</button>
				<div className={"settings__window--block" + ' ' + (props.logoutWindow ? 'active' : '')}>
					<span onClick={() => props.setLogoutWindow(false)} className="settings__window--bg"></span>
					<div className="settings__window">
						<h3>Are you sure?</h3>
						<div className="setting__buttons">
							<button onClick={() => props.setLogoutWindow(false)} className="settings__cancel">Cancel</button>
							<button onClick={() => {props.logoutThunk(); props.setLogoutWindow(false)}}>Logout</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Settings;
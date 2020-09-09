import React from 'react';
import './sidebar.css';
import {NavLink} from 'react-router-dom';

const Sidebar = (props) => {
	return(
		<div className="sideBar">
			<nav>
				<ul className="list">
					<li><NavLink to={"/profile/" + props.id} className="link">Profile</NavLink></li>
					<li><NavLink to="/dialogs" className="link">Messages</NavLink></li>
					<li><NavLink to="/users" className="link">Friends</NavLink></li>
					<li><NavLink to="/news" className="link">News</NavLink></li>
					<li><NavLink to="" className="link">Music</NavLink></li>
					<li><NavLink to="/settings" className="link">Settings</NavLink></li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
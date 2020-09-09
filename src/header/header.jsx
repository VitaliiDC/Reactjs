import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';

function Header(props) {
  return (
  	<header className="header">
  		<a href="#" className="logo"><img src="https://image.flaticon.com/icons/svg/2965/2965289.svg"/></a>
  		{!props.auth ? <NavLink to="/login" className="login">Login</NavLink> : <div className="login">{props.login}</div>}
  	</header>
  );
}

export default Header;
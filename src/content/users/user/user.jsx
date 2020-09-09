import React from 'react';
import {NavLink} from 'react-router-dom';

	const User = (props) => {

		const imgStyle = {
			background: 'url('+props.img +')',
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		}

		return (
			<div className="user">
				<div className="user__firstcolumn">
					<NavLink to={"/profile/" + props.id} style={imgStyle} className="user__avatar"></NavLink>
					{props.isAuth && <div>
						{props.followed
							? <button disabled={props.followRequest.some(id => id == props.id)} onClick={() => props.unfollowThunk(props.id)} className={props.followRequest.some(id => id == props.id) ? "disabled user__follow posts__button" : "user__follow posts__button"}>Unfollow</button> 
							: <button disabled={props.followRequest.some(id => id == props.id)} onClick={() => props.followThunk(props.id)} className={props.followRequest.some(id => id == props.id) ? "disabled user__follow posts__button" : "user__follow posts__button"}>Follow</button>}
					</div>}
				</div>
				<div className="user__secondcolumn">
					<div className="user__info">
						<div className="user__name">{props.name}</div>
						<div className="user__status">{props.status}</div>
					</div>
					<div className="user__location">
						<div className="user__country">{"props.country,"}</div>
						<div className="user__city">{"props.city"}</div>
					</div>
				</div>
			</div>
		)
	}

export default User;
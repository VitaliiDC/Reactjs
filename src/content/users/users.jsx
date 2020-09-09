import React from 'react';
import './users.css';
import User from './user/user.jsx';

const Users = (props) => {
	let pageCount = Math.ceil(props.usersCount / props.pageSize);
	let portionCount = Math.ceil(pageCount/ props.portionSize);
	let leftPage = (props.currentPortion - 1) * props.portionSize + 1;
	let rightPage = props.currentPortion * props.portionSize;

	let pages = [];
	for(let i = 1; i <= pageCount; i++){
		pages.push(i);
	};

	return(
		<div className={props.loading ? 'users load' : 'users'}>
			{props.users.map((u) => <User {...props} followRequest={props.followRequest} toggleFollowRequest={props.toggleFollowRequest} followThunk={props.followThunk} unfollowThunk={props.unfollowThunk} id={u.id} followed={u.followed} img={u.photos.small === null ? `https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png` : u.photos.small} name={u.name} status={u.status} loading={props.loading} />)}
			<div className="paginator">
				<div className="paginator__button">
					{props.currentPortion > 1 && <button onClick={() => {props.setCurrentPortion(props.currentPortion - 1)}} >Prev</button>}
				</div>
				<div className="paginator__pages">
					{pages.filter(i => i >= leftPage && i <= rightPage).map(i => <button className={props.currentPage === i && 'selected'} onClick={() => {props.pageChange(i)}}>{i}</button>)}
				</div>
				<div className="paginator__button">
					{props.currentPortion < portionCount && <button onClick={() => {props.setCurrentPortion(props.currentPortion + 1)}} >Next</button>}
				</div>
			</div>
		</div>
	)
};

export default Users;

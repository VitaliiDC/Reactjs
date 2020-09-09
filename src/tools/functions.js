export const followUnfollow = (items, id, itemId, props) => {
	return items.map((u) => {
		if(u.[id] === itemId){
			return {...u, ...props};
		}
		return u;
	})
}
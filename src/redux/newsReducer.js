let initialState = {
	new: [
		{id: 1, text: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor',
		 following: false, title: 'Lorem ipsum', date: '07.20.2020',
		 imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BBC_News_%282008%29.svg/1200px-BBC_News_%282008%29.svg.png'}
	],
};

let newsReducer = (state = initialState, action) => {
	switch(action.type){
		default:
			return state;
	}
}

export default newsReducer;
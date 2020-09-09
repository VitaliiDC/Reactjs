let initialState = {
	messages: [{name: 'Sophia', text: 'Hello'},],
	names: [{id: 1, name: 'Sonya'},],
};

const dialogsReducer = (state = initialState, action) => {

	switch(action.type){
		case 'addMessage':
			return {...state, messages: [...state.messages, {name: 'Sophia', text: action.text}]}
		default: 
			return state;
	}
};

export const addMessage = (text) => ({type: 'addMessage', text});

export default dialogsReducer;

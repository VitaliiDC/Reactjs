import profileReducer from './profileReducer.js';

let store = {
	_state: {
		profile: {
			posts: [
				{text: 'Hello', like: 0},
				{text: 'Sonya', like: 0},
			],
		},
	},
	getState() {
		return this._state;
	},
	_render() {},
	subscribe(observer) {
		this._render = observer;
	},
	dispatch(action){
		this._state.profile = profileReducer(this._state.profile, action);

		this._render();
	}

};

export default store;

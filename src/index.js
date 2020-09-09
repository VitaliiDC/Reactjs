import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore.js';

let render = () => {
	ReactDOM.render(
		<MainApp />
		,document.getElementById('root')
	);
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

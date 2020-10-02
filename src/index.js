import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './reducer';
import { BrowserHistory } from 'react-router-dom';

ReactDOM.render(
	<BrowserHistory base={document.getElementsByTagName('base')[0].getAttribute('href')}>
		<StateProvider initialState={initialState} reducer={ reducer }>
			<App />
		</StateProvider>
	</BrowserHistory>,
	document.getElementById('root')
);


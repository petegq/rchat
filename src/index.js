import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import { Auth } from './firebase';

import 'semantic-ui-css/semantic.min.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

const Root = ({ history }) => {
	useEffect(() => {
		Auth.onAuthStateChanged(user => {
			if (user) history.push('/');
		});
	});

	return (
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
		</Switch>
	);
};

const RootWithAuth = withRouter(Root);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<RootWithAuth />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();

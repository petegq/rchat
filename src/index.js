import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import registerServiceWorker from './registerServiceWorker';
import { Auth } from './firebase';

import 'semantic-ui-css/semantic.min.css';

import Spinner from './components/Spinner';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser, clearUser } from './actions';

const store = createStore(rootReducer, composeWithDevTools());

const Root = ({ history, setUser, isLoading }) => {
	useEffect(() => {
		Auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user);
				history.push('/');
			} else {
				clearUser();
				history.push('/login');
			}
		});
	}, [Auth, history, setUser]);

	return isLoading ? (
		<Spinner size={'huge'} content={'Preparing chat...'} />
	) : (
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
		</Switch>
	);
};

const mapStateToProps = state => ({
	isLoading: state.user.isLoading,
});

const RootWithAuth = withRouter(
	connect(mapStateToProps, { setUser, clearUser })(Root),
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<RootWithAuth />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();

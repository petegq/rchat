import React, { Component } from 'react';
import './App.css';

import { Auth } from '../firebase';

const App = ({history}) => {
	const signOut = () => {
		return Auth.signOut()
			.then(() => history.push('/login'));
	}
	return (
		<div>
			<button onClick={() => signOut()}>Sign Out</button>
		</div>
	);
};

export default App;

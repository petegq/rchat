import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import SidePanel from './SidePanel/SidePanel';

import { Auth } from '../firebase';

const App = ({ history }) => {
	const signOut = () => {
		return Auth.signOut().then(() => history.push('/login'));
	};
	return (
		// <div>
		// 	<button onClick={() => signOut()}>Sign Out</button>
		// </div>
		<Grid
			columns={'equal'}
			className={'app'}
			style={{ background: '#999' }}>
			<SidePanel />
		</Grid>
	);
};

export default App;

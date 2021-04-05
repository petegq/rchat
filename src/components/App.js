import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import InfoPanel from './InfoPanel/InfoPanel';

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
			style={{ background: '#eee' }}>
			<ColorPanel />
			<SidePanel />
			<Messages />
			<InfoPanel />
		</Grid>
	);
};

export default App;

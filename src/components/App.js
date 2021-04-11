import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

import './App.css';

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import InfoPanel from './InfoPanel/InfoPanel';
import { connect } from 'react-redux';

const App = ({ history, currentUser }) => {
	return (
		<Grid
			columns={'equal'}
			className={'app'}
			style={{ background: '#eee' }}>
			<ColorPanel />
			<SidePanel currentUser={currentUser} />
			<Grid.Column style={{ marginLeft: 300 }}>
				<Messages />
			</Grid.Column>
			<Grid.Column width={4}>
				<InfoPanel />
			</Grid.Column>
		</Grid>
	);
};

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);

import React from 'react';
import { Grid } from 'semantic-ui-react';

import './App.css';

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import InfoPanel from './InfoPanel/InfoPanel';

const App = ({ history }) => (
	<Grid columns={'equal'} className={'app'} style={{ background: '#eee' }}>
		<ColorPanel />
		<SidePanel />
		<Grid.Column style={{ marginLeft: 300 }}>
			<Messages />
		</Grid.Column>
		<Grid.Column width={4}>
			<InfoPanel />
		</Grid.Column>
	</Grid>
);

export default App;

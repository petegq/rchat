import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanel from './UserPanel';

const SidePanel = () => (
	<Menu
		size={'large'}
		inverted
		fixed={'left'}
		vertical
		style={{ background: '#449', fontSize: '1.2rem' }}>
		<UserPanel />
	</Menu>
);

export default SidePanel;

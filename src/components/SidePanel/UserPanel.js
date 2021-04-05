import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const UserPanel = () => (
	<Grid style={{ background: '#449' }}>
		<Grid.Column>
			<Grid.Row style={{ margin: 0, padding: '1.2em' }}>
				<Header floated={'left'} as={'h2'}>
					<Header.Content>rChat</Header.Content>
				</Header>
			</Grid.Row>
		</Grid.Column>
	</Grid>
);

export default UserPanel;

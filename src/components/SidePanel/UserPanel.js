import React from 'react';
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react';
import { Auth } from '../../firebase';

const UserPanel = () => {
	const dropDownOptions = () => [
		{
			key: 'user',
			text: (
				<span>
					Signed in as <strong>User</strong>
				</span>
			),
			disabled: true,
		},
		{
			key: 'avatar',
			text: <span>Change Avatar</span>,
		},
		{
			key: 'signout',
			text: <span onClick={signOut}>Sign Out</span>,
		},
	];

	const signOut = () => {
		return Auth.signOut().then(() => console.log('Signed out!'));
	};

	return (
		<Grid style={{ background: '#499' }}>
			<Grid.Column>
				<Grid.Row style={{ margin: 0, padding: '1.2em' }}>
					<Header inverted floated={'left'} as={'h2'}>
						<Icon name={'wechat'} />
						<Header.Content>rChat</Header.Content>
					</Header>
				</Grid.Row>
				<Header>
					<Dropdown
						trigger={<span>User</span>}
						options={dropDownOptions()}
					/>
				</Header>
			</Grid.Column>
		</Grid>
	);
};

export default UserPanel;

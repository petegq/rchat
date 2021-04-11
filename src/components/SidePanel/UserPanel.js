import React, { useState, useEffect } from 'react';
import { Dropdown, Grid, Header, Icon, Image } from 'semantic-ui-react';
import { Auth } from '../../firebase';
import { connect } from 'react-redux';

const UserPanel = ({ currentUser }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		!user && currentUser ? setUser(currentUser) : null;
	});

	const dropDownOptions = () => [
		{
			key: 'user',
			text: (
				<span>
					Signed in as{' '}
					<strong>{user?.displayName || 'Unknown'}</strong>
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

	console.log('currentUser', currentUser);

	return (
		<Grid style={{ background: '#449' }}>
			<Grid.Column>
				<Grid.Row style={{ margin: 0, padding: '1.2em' }}>
					<Header
						inverted
						floated={'left'}
						as={'h2'}
						style={{ paddingBottom: '0.5em' }}>
						<Icon name={'code'} />
						<Header.Content>rChat</Header.Content>
					</Header>

					<Header>
						<Dropdown
							trigger={
								<span>
									<Image
										src={user?.photoURL}
										spaced={'right'}
										avatar
									/>{' '}
									{user?.displayName}
								</span>
							}
							options={dropDownOptions()}
						/>
					</Header>
				</Grid.Row>
			</Grid.Column>
		</Grid>
	);
};

export default UserPanel;

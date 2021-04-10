import React, { useState, useEffect } from 'react';
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react';
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
					<Header inverted floated={'left'} as={'h2'}>
						<Icon name={'code'} />
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

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UserPanel);

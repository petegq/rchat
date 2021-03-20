import React, { useState } from 'react';
import firebase from '../../firebase';
import {
	Grid,
	Form,
	Segment,
	Button,
	Header,
	Message,
	Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Register = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});
	const { username, email, password, passwordConfirmation } = user;

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then(createdUser => {
				console.log('createdUser', createdUser);
			})
			.catch(err => console.error(err));
	};

	return (
		<Grid textAlign='center' verticalAlign='middle' className='app'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' icon color='red' textAlign='center'>
					<Icon name='wechat' color='red' />
					Register for rChat
				</Header>
				<Form onSubmit={handleSubmit} size='large'>
					<Segment>
						<Form.Input
							fluid
							name='username'
							icon='user'
							iconPosition='left'
							placeholder='Username'
							onChange={handleChange}
							value={username}
							type='text'
						/>
						<Form.Input
							fluid
							name='email'
							icon='mail'
							iconPosition='left'
							placeholder='you@gmail.com'
							onChange={handleChange}
							value={email}
							type='email'
						/>
						<Form.Input
							fluid
							name='password'
							icon='lock'
							iconPosition='left'
							placeholder='Password'
							onChange={handleChange}
							value={password}
							type='password'
						/>
						<Form.Input
							fluid
							name='passwordConfirmation'
							icon='repeat'
							iconPosition='left'
							placeholder='Password Confirmation'
							onChange={handleChange}
							value={passwordConfirmation}
							type='password'
						/>
						<Button color='red' fluid size='large'>
							Submit
						</Button>
					</Segment>
				</Form>
				<Message>
					Already a user? <Link to='/login'>Login</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Register;

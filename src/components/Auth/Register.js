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
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});
	const { username, email, password, passwordConfirmation } = user;

	const isFormValid = () => {
		let error;
		if (isFormEmpty( user )) {
			error = { message: 'Fill in all fields' };
			setErrors( [error] );
			return false;
		}
		if (!isPasswordValid( user )) {
			error = { message: 'Password is invalid' };
			setErrors( [error] );
			return false;
		}
		console.log("VALID");
		return true;
	}

	const isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
		return !username.length || !email.length || !password.length || !passwordConfirmation.length;
	}

	const isPasswordValid = ({ password, passwordConfirmation }) => {
		console.log("password.length", password.length);
		return password.length > 7 && password === passwordConfirmation;
	}

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
			event.preventDefault();
		if (isFormValid()) {
			setErrors([]);
			setLoading(true);
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then(createdUser => {
					console.log('createdUser', createdUser);
					setLoading(false);
				})
				.catch(err => {
					console.error(err);
					setErrors( [err] );
					setLoading(false);
				});
		}
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
							placeholder='Password must be 8+ chars long'
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
						<Button disabled={loading} className={loading?'loading':''} color='red' fluid size='large'>
							Submit
						</Button>
					</Segment>
				</Form>
				{errors.length > 0 && (
					<Message error>
						{errors.map((err, i) => <p key={i}>{err.message}</p>)}
					</Message>
				)}
				<Message>
					Already a user? <Link to='/login'>Login</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Register;

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

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { email, password } = user;

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const isFormValid = ({ email, password }) => email && password;

	const handleSubmit = event => {
		event.preventDefault();
		if (isFormValid(user)) {
			setErrors([]);
			setLoading(true);
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(signedInUser => {
					console.log('signedInUser', signedInUser);
					setLoading(false);
				})
				.catch(err => {
					setErrors([err]);
					setLoading(false);
				});
		}
	};

	const handleInputError = (errors, inputName) => {
		return (
			errors.some(error =>
				error.message.toLowerCase().includes(inputName),
			) && 'error'
		);
	};

	return (
		<Grid textAlign='center' verticalAlign='middle' className='app'>
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as='h2' icon color='red' textAlign='center'>
					<Icon name='wechat' color='red' />
					Login to rChat
				</Header>
				<Form onSubmit={handleSubmit} size='large'>
					<Segment>
						<Form.Input
							fluid
							name='email'
							icon='mail'
							iconPosition='left'
							placeholder='you@email.com'
							onChange={handleChange}
							value={email}
							className={handleInputError(errors, 'email')}
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
							className={handleInputError(errors, 'password')}
							type='password'
						/>
						<Button
							disabled={loading}
							className={loading && 'loading'}
							color='red'
							fluid
							size='large'>
							Submit
						</Button>
					</Segment>
				</Form>
				{errors.length > 0 && (
					<Message error>
						{errors.map((err, i) => (
							<p key={i}>{err.message}</p>
						))}
					</Message>
				)}
				<Message>
					Not a user? <Link to='/register'>Register</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Login;

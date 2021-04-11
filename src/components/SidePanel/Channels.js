import React, { useState, useEffect } from 'react';
import { Firestore } from '../../firebase';
import { Icon, Menu, Modal, Form, Input, Button } from 'semantic-ui-react';

const Channels = ({ currentUser }) => {
	const [channels, setChannels] = useState([]);
	const [channel, setChannel] = useState({
		name: '',
		details: '',
		channelsRef: Firestore.collection('channels'),
	});
	const [modal, setModal] = useState(false);

	const openModal = () => setModal(true);

	const closeModal = () => setModal(false);

	const handleChange = event =>
		setChannel({
			...channel,
			[event.target.name]: event.target.value,
		});

	const handleSubmit = event => {
		event.preventDefault();
		if (isFormValid(channel.name, channel.details)) {
			console.log('channel added', channel);
		}
		setModal(false);
	};

	const isFormValid = (name, details) => name && details;

	const addChannel = () => {
		const { channelsRef, name, details } = channel;

		const id = channelsRef.push().key;

		const newChannel = {
			id,
			name,
			details,
			createdBy: {
				name: currentUser.displayName,
			},
		};

		channelsRef
			.child(id)
			.update(newChannel)
			.then(res => {
				setChannel({ ...channel, name: '', details: '' });
				setModal(false);
				console.log('Channel Added', res);
			})
			.catch(err => console.log('ERR', err));
	};

	return (
		<>
			<Menu.Menu style={{ paddingBottom: '2em' }}>
				<Menu.Item>
					<span>
						<Icon name={'exchange'} /> Channels
					</span>{' '}
					({channels.length}){' '}
					<Icon name={'add'} onClick={openModal} />
				</Menu.Item>
			</Menu.Menu>

			<Modal basic open={modal} onClose={closeModal}>
				<Modal.Header>Add Channel</Modal.Header>
				<Modal.Content>
					<Form onSubmit={handleSubmit}>
						<Form.Field>
							<Input
								fluid
								label={'Name'}
								name={'name'}
								onChange={handleChange}
							/>
						</Form.Field>
						<Form.Field>
							<Input
								fluid
								label={'About'}
								name={'details'}
								onChange={handleChange}
							/>
						</Form.Field>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button color={'green'} inverted onClick={handleSubmit}>
						<Icon name={'checkmark'} /> Add
					</Button>
					<Button color={'red'} inverted onClick={closeModal}>
						<Icon name={'remove'} /> Cancel
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export default Channels;

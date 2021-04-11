import React, { useState, useEffect } from 'react';
import { Icon, Menu, Modal, Form, Input, Button } from 'semantic-ui-react';

const Channels = () => {
	const [channels, setChannels] = useState([]);
	const [channelName, setChannelName] = useState([]);
	const [channelDetails, setChannelDetails] = useState([]);
	const [modal, setModal] = useState(false);

	const openModal = () => setModal(true);

	const closeModal = () => setModal(false);

	const handleChange = () => setModal(false);

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
					<Form>
						<Form.Field>
							<Input
								fluid
								label={'Name'}
								name={'channelName'}
								onChange={handleChange}
							/>
						</Form.Field>
						<Form.Field>
							<Input
								fluid
								label={'About'}
								name={'channelDetails'}
								onChange={handleChange}
							/>
						</Form.Field>
					</Form>
				</Modal.Content>
				<Modal.Actions>
					<Button color={'green'} inverted>
						<Icon name={'checkmark'} /> Add
					</Button>
					<Button color={'red'} inverted>
						<Icon name={'remove'} /> Cancel
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export default Channels;

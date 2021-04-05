import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Spinner = ({ size, content }) => (
	<Dimmer active>
		<Loader size={size} content={content} />
	</Dimmer>
);

export default Spinner;

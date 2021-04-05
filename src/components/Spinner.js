import React from 'react';
import { Loader } from 'semantic-ui-react';

const Spinner = ({ size, content }) => (
	<Loader size={size} content={content} active />
);

export default Spinner;

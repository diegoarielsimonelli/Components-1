import React from 'react';
import { Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const styles = {
	icon1: {
		color: 'red',
		fontSize: 24,
	},
	icon2: {
		color: 'blue',
		fontSize: 24,
	},
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		minHeight: 200,
		backgroundColor: 'rgb(227, 244, 100)',
	},
};

const IconsContainer = () => {
	return (
		<div style={styles.container}>
			<Icon name='twitter' style={styles.icon1} />
			<FontAwesomeIcon icon={faCoffee} style={styles.icon2} />
		</div>
	);
};

export default IconsContainer;

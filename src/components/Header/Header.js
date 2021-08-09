import React from 'react';
import './Header.css';
import { Icon } from 'semantic-ui-react';
import img from './logo-coder.png';
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
};

const Header = (props) => {
	return (
		<div className='Header'>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
			<img src={img} alt='logo coder' width='200px' />
		</div>
	);
};

export default Header;

import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Header.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Header () {
	return (
		<nav className="Header">
			<a href="/">
				<img className="Logo" src={Logo} alt="3DFLIX Logo"/>
			</a>

			<Button as="a" className="ButtonLink" href="/">
				New Video
			</Button>
		</nav>
	);
}

export default Header;
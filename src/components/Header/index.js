import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import './Header.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Header () {
	return (
		<nav className="Header">
			<Link to="/">
				<img className="Logo" src={Logo} alt="3DFLIX Logo"/>
			</Link>

			<Button as={Link} className="ButtonLink" to="/cadastro/video">
				New Video
			</Button>
		</nav>
	);
}

export default Header;
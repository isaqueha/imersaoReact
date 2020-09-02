import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/GamesflixLogo.png';
import Image from '../../assets/img/GamesflixImage.png';
import './Header.css';
import Button from '../Button';

function Header() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="Image" src={Image} alt="GamesFlix" />
        <img className="Logo" src={Logo} alt="GamesFlix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/register/game">
        New Game
      </Button>
    </nav>
  );
}

export default Header;

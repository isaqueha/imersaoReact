import React from 'react';
import FooterBase from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Created with love by
        {' '}
        <span>&nbsp;&nbsp;</span>
        <a href="https://github.com/isaqueha">
          Isaque Hoffmeister
        </a>
        <a href="https://github.com/isaqueha">
          <img src="https://avatars3.githubusercontent.com/u/13629975?s=460&u=1594f8d61791752990f25cdc40def2129154ad4b&v=4" alt="Profile" />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

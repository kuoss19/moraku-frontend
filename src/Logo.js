import React from 'react';
import './style.css';
import { Image } from 'react-bootstrap';
import Logo from './logo.jpg';

function Logo() {
  return <Image src={Logo} alt="logo" />;
}

export default Logo;

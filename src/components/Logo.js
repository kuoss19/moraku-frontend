import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../assets/img/logo.jpg';
import '../assets/css/style.css';

function Logo() {
  return <Image src={Logo} alt="logo" />;
}

export default Logo;

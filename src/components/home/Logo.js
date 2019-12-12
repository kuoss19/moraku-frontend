import React from 'react';
import { Image, Col } from 'react-bootstrap';
import LogoImage from '../../assets/img/logo.jpg';

function Logo() {
  return (
    <>
      <Col />
      <Col>
        <Image height="400px" src={LogoImage} alt="logo" />
      </Col>
      <Col />
    </>
  );
}

export default Logo;

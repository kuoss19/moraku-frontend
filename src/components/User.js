import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import '../assets/css/style.css';

function User({ userName, language, flag, icon }) {
  return (
    <Container className="user">
      <Row>
        <Col md="4">{userName}</Col>
        <Col md="4">
          <Image src={flag} alt={language} />
        </Col>
        <Col md="4">
          <Image src={icon} alt={userName} />
        </Col>
      </Row>
    </Container>
  );
}

export default User;

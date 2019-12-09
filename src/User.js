import React from 'react';
import './style.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

function User(props) {
  return (
    <Container className="user">
      <Row>
        <Col md="4">{props.userName}</Col>
        <Col md="4">
          <Image src={props.flag} alt={props.language} />
        </Col>
        <Col md="4">
          <Image src={props.icon} alt={props.userName} />
        </Col>
      </Row>
    </Container>
  );
}

export default User;

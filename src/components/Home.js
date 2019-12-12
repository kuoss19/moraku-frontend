import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/img/logo.jpg';
import Title from './Title';
import Login from './Login';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col />
        <Col>
          <Logo />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col>
          <Title />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col>
          <Login />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Home;

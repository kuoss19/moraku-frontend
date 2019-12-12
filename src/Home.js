import React, { Component } from 'react';
import Logo from './Logo';
import Title from './Title';
import Login from './Login';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Logo />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Title />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Login />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Home;

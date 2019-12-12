import React from 'react';
import Users from './Users';
import ChattingBox from './ChattingBox';
import InputForm from './InputForm';
import './style.css';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Chat() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Users />
        </Col>
        <Col md={9}>
          <ChattingBox />
          <InputForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;

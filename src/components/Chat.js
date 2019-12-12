import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Users from './Users';
import ChattingBox from './ChattingBox';
import InputForm from './InputForm';
import '../assets/css/style.css';
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

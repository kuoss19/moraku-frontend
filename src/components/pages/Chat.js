import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ChattingBox, InputForm, Users } from '../chat';

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

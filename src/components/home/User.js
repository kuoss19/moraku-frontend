import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Col, Row } from 'react-bootstrap';

export default function UserAction() {
  const [enter, setEnter] = useState(false);

  const enterChatroom = event => {
    event.preventDefault();
    setEnter(true);
  };

  const logout = async event => {
    event.preventDefault();
    await firebase.auth().signOut();
  };

  if (enter) {
    return <Redirect to="/chat" />;
  }

  return (
    <>
      <Col />
      <Col>
        <Row>
          <Col>
            <Button variant="primary" onClick={enterChatroom}>
              채팅방 입장!
            </Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={logout}>
              로그아웃
            </Button>
          </Col>
        </Row>
      </Col>
      <Col />
    </>
  );
}

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Col, Row } from 'react-bootstrap';

export default function UserAction() {
  const enterChatroom = event => {
    event.preventDefault();
    console.log('enter chatroom');
  };

  const logout = async event => {
    event.preventDefault();
    await firebase.auth().signOut();
  };

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

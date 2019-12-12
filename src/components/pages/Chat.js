import io from 'socket.io-client';
import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import { ChattingBox, InputForm, Users } from '../chat';
import {
  connectFailed,
  connectSuccessful,
  anotherPersonConnected,
} from '../../actions/chat/connection';
import { receiveMessage } from '../../actions/chat/message';

function Chat() {
  const socket = useRef();
  const user = useSelector(state => state.user);
  const { error } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io('http://localhost:4000', { query: user });

    socket.current.on('connect_error', () => {
      dispatch(connectFailed('connection refused'));
    });

    socket.current.on('hello', newParticipant => {
      dispatch(anotherPersonConnected(newParticipant));
    });

    socket.current.on('connected', participants => {
      dispatch(connectSuccessful(participants, { id: socket.id, ...user }));
    });

    socket.current.on('message', message => {
      dispatch(receiveMessage(message));
    });
  }, [dispatch, user]);

  if (!user || error) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Users />
        </Col>
        <Col md={9}>
          <ChattingBox />
          <InputForm client={socket} />
        </Col>
      </Row>
    </Container>
  );
}

export default Chat;

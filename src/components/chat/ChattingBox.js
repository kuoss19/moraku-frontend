import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Chatting from './Chatting';

function ChattingBox() {
  const { messages } = useSelector(state => state.chat);

  return (
    <Container className="chatting_box">
      {messages.map((message, i) => (
        <Chatting text={message.text} style={message.style} key={i} />
      ))}
    </Container>
  );
}

export default ChattingBox;

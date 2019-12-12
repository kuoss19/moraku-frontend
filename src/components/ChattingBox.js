import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/css/style.css';
import Chatting from './Chatting';

const chattings = [
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'left',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'right',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'left',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'left',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'right',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'left',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'right',
  },
  {
    text: 'Erat stet dolores ut tempor et rebum vero eirmod sit..',
    style: 'left',
  },
];

function ChattingBox() {
  return (
    <Container className="chatting_box">
      {chattings.map((chatting, i) => (
        <Chatting text={chatting.text} style={chatting.style} key={i} />
      ))}
    </Container>
  );
}

export default ChattingBox;

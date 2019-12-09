import React from 'react';
import './style.css';
import { Container } from 'react-bootstrap';
import Chatting from './Chatting.js';

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
      {chattings.map((chatting, i) => {
        return <Chatting text={chatting.text} style={chatting.style} key={i} />;
      })}
    </Container>
  );
}

export default ChattingBox;

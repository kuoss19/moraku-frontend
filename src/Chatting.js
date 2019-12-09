import React from 'react';
import './style.css';
import {} from 'react-bootstrap';

function Chatting(props) {
  return <p className={props.style}>{props.text}</p>;
}

export default Chatting;

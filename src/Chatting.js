import React from 'react';
import './style.css';

function Chatting({ style, text }) {
  return <p className={style}>{text}</p>;
}

export default Chatting;

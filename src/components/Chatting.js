import React from 'react';
import '../assets/css/style.css';

function Chatting({ style, text }) {
  return <p className={style}>{text}</p>;
}

export default Chatting;

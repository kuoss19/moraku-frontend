import React from 'react';
import './style.css';

function Button({ style, onClick, text }) {
  return (
    <button type="submit" className={style} onClick={onClick}>
      {' '}
      //TODO onClick event handler 구현
      {text}
    </button>
  );
}

export default Button;

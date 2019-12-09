import React from 'react';
import './style.css';

function Button(props) {
  return (
    <button type="submit" className={props.style} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;

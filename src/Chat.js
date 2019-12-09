import React from 'react';
import Users from './Users';
import ChattingBox from './ChattingBox';
import InputForm from './InputForm';
import './style.css';

function Chat() {
  return (
    <div className="chat">
      <Users />
      <ChattingBox />
      <InputForm />
    </div>
  );
}

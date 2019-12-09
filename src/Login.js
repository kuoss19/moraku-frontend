import React from 'react';
import Language from './Language';
import Button from './Button';
import './style.css';

function Login() {
  return (
    <div className="login">
      <Language />
      <Button style="login-btn" onClick="" text="구글 로그인" />
    </div>
  );
}

export default Login;

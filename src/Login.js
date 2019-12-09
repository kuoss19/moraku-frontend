import React from 'react';
import Language from './Language';
import Button from './Button';
import './style.css';

function Login() {
  return (
    <div>
      <Language />
      <Button style="btn btn-dark" onClick="" text="구글 로그인" />
    </div>
  );
}

export default Login;

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Col } from 'react-bootstrap';
import Button from '../../assets/img/google-login-button.png';

function Login() {
  const startLogin = async event => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'ko';
    await firebase.auth().signInWithPopup(provider);
  };

  return (
    <>
      <Col />
      <Col>
        <div>
          <div id="google-login-button" onClick={startLogin}>
            <img
              src={Button}
              style={{ height: '70px' }}
              alt="sign-in-with-google"
            />
          </div>
        </div>
      </Col>
      <Col />
    </>
  );
}

export default Login;

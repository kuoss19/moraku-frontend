import React, { Component } from 'react';
import Logo from './Logo';
import Title from './Title';
import Login from './Login';
import './style.css';

function Home() {
  return (
    <div>
      <Logo />
      <Title />
      <Login />
    </div>
  );
}

export default Home;

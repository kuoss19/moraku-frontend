import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Home, Chat } from './pages';
import { login, logout } from '../actions/userActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        dispatch(login(auth));
      } else {
        dispatch(logout(auth));
      }
    });
  });

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Logo, Title, LanguageSelect, UserAction, Login } from '../home';

export default function Home() {
  const user = useSelector(state => state.user);

  return (
    <Container>
      <Row>
        <Logo />
      </Row>
      <Row>
        <Title />
      </Row>
      <Row>
        <LanguageSelect />
      </Row>
      <Row>
        {''}
        {user ? <UserAction user={user} /> : <Login />}
        {''}
      </Row>
    </Container>
  );
}

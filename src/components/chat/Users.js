import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import User from './User';

function Users() {
  const { participants } = useSelector(state => state.chat);
  const lang = useSelector(state => state.lang);

  return (
    <Container className="users">
      {participants.map(({ id, username, photo, flag }) => (
        <User
          userName={username}
          icon={photo}
          flag={flag}
          language={lang}
          key={id}
        />
      ))}
    </Container>
  );
}

export default Users;

import React from 'react';
import { Container } from 'react-bootstrap';
import User from './User';

const users = [
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
  {
    userName: 'Alex',
    icon: '-',
    flag: '-',
    language: 'en',
  },
];

function Users() {
  return (
    <Container className="users">
      {users.map(({ userName, icon, flag, language }, index) => (
        <User
          userName={userName}
          icon={icon}
          flag={flag}
          language={language}
          key={index}
        />
      ))}
    </Container>
  );
}

export default Users;

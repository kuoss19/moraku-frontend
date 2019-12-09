import React from 'react';
import User from './User.js';
import './style.css';
import { Container } from 'react-bootstrap';

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
];

function Users() {
  return (
    <Container className="users">
      {users.map((user, i) => {
        return (
          <User
            userName={user.userName}
            icon={user.icon}
            flag={user.flag}
            language={user.language}
            key={i}
          />
        );
      })}
    </Container>
  );
}

export default Users;

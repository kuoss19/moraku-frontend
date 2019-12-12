import React from 'react';
import User from './User';
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
      {users.map(({ userName, icon, flag, language }, index) => {
        return <User userName={userName} icon={icon} flag={flag} language={language} key={index} />;
      })}
    </Container>
  );
}

export default Users;

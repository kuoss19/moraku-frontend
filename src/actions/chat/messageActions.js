export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const sendMessage = message => ({
  type: SEND_MESSAGE,
  message,
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});

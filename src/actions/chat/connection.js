export const CONNECT_SUCCESSFUL = 'CONNECT_SUCCESSFUL';
export const CONNECT_FAILED = 'CONNECT_FAILED';
export const ANOTHER_PERSON_CONNECTED = 'ANOTHER_PERSON_CONNECTED';

export const connectSuccessful = (participants, me) => ({
  type: CONNECT_SUCCESSFUL,
  participants,
  me,
});
export const connectFailed = error => ({ type: CONNECT_FAILED, error });

export const anotherPersonConnected = participant => ({
  type: ANOTHER_PERSON_CONNECTED,
  participant,
});

import {
  CONNECT_SUCCESSFUL,
  CONNECT_FAILED,
  ANOTHER_PERSON_CONNECTED,
} from '../actions/chat/connection';
import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../actions/chat/message';

const initialState = {
  participants: [],
  messages: [],
  error: false,
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case CONNECT_SUCCESSFUL:
      return {
        ...state,
        error: false,
        participants: [action.me, ...action.participants],
      };
    case ANOTHER_PERSON_CONNECTED:
      return {
        ...state,
        error: false,
        participants: [...state.participants, action.participant],
      };
    case CONNECT_FAILED:
      return { ...initialState, error: true };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { ...action.message, style: 'right' }],
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { ...action.message, style: 'left' }],
      };
    default:
      return state;
  }
}

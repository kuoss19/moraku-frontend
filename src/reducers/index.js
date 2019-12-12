import { combineReducers } from 'redux';
import userReducer from './userReducer';
import langReducer from './langReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  user: userReducer,
  lang: langReducer,
  chat: chatReducer,
});

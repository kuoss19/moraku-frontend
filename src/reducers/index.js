import { combineReducers } from 'redux';
import user from './user';
import lang from './lang';
import chat from './chat';

export default combineReducers({ user, lang, chat });

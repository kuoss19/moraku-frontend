import { SELECT_LANG } from '../actions/lang';

const initialState = 'ko';

export default (state = initialState, action) => {
  if (action.type === SELECT_LANG) {
    return action.lang;
  }

  return state;
};

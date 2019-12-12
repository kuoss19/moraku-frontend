import { LOGIN, LOGOUT } from '../actions/users';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        username: action.user.displayName,
        email: action.user.email,
        photo: action.user.photoURL,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

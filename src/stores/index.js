import throttle from 'lodash/throttle';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

function saveState(state) {
  // eslint-disable-next-line no-undef
  localStorage.setItem('user', JSON.stringify(state.user));
}

function loadState(key) {
  try {
    // eslint-disable-next-line no-undef
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

const cachedState = {
  user: loadState('user'),
};

const store = createStore(
  rootReducer,
  cachedState,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState(state);
  }, 1000),
);

export default store;

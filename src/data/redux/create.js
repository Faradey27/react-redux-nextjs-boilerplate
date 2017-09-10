import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import api from './../api';
import createReducers from './reducer';
import apiMiddleware from './middlewares/apiMiddleware';

export default (initialState) => {
  const middlewares = [thunkMiddleware, apiMiddleware({ api })];

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');

    if (process.browser) {
      middlewares.push(logger);
    }
  }

  return createStore(
    combineReducers(createReducers()),
    initialState,
    applyMiddleware(...middlewares)
  );
};

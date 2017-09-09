import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import api from './../../src/data/api';
import apiMiddleware from './../../src/data/redux/middlewares/apiMiddleware';

const middlewares = [thunk, apiMiddleware({ api })];
const mockStore = configureMockStore(middlewares);

export const getStore = (state = {}) => mockStore(state);

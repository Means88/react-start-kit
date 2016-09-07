import "isomorphic-fetch";
import createLogger from 'redux-logger';
import React from 'react';
import reduxApi from './rest';
import router from './router';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

const logger = createLogger();
const reducer = combineReducers(reduxApi.reducers);

const createDebugStore = applyMiddleware(thunk, logger)(createStore);
const createReleaseStore = applyMiddleware(thunk)(createStore);

const debugStore = createDebugStore(reducer);
const store = createReleaseStore(reducer);


let Component = {};
Component.release = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {router()}
    </Router>
  </Provider>
);

Component.debug = (
  <Provider store={debugStore}>
    <Router history={browserHistory}>
      {router()}
    </Router>
  </Provider>
);
export default Component;

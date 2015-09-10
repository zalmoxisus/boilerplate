import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import todoApp from './reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

let createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

export default createStoreWithMiddleware(todoApp);
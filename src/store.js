import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

let createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    logger
  ),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

// Same code without the `compose` helper:
//
// finalCreateStore = applyMiddleware(middleware)(
//   devTools()(
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))()
//   )
// )(createStore);

export default createStoreWithMiddleware(todoApp);
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
//import createHistory from 'history/lib/createHashHistory';
import reducer from '../reducers';

export default function configureStore() {
  if (DEBUG) {
    let finalCreateStore;

    const logger = require('redux-logger')({
      level: 'info',
      collapsed: true
    });

    finalCreateStore = compose(
      reduxReactRouter({ createHistory }),
      applyMiddleware(
        logger
      )
    )(createStore);

    const store = finalCreateStore(reducer);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }

    return store;
  }

  return compose(reduxReactRouter({ createHistory }))(createStore)(reducer);
}

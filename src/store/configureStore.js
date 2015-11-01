import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
//import createHistory from 'history/lib/createHashHistory';
import reducer from '../reducers';

export default function configureStore() {
  if (DEBUG) {
    const { devTools, persistState } = require('redux-devtools');
    let finalCreateStore;

    const logger = require('redux-logger')({
      level: 'info',
      collapsed: true
    });

    finalCreateStore = compose(
      reduxReactRouter({ createHistory }),
      applyMiddleware(
        logger
      ),
      // Provides support for DevTools:
      devTools(),
      // Lets you write ?debug_session=<name> in address bar to persist debug sessions
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);

    const store = finalCreateStore(reducer);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }

    window.showDevTools = () => {
      require('../utils/debug/createDevToolsWindow')(store);
    };

    return store;
  }

  return compose(reduxReactRouter({ createHistory }))(createStore)(reducer);
}

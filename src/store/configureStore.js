import { createStore, applyMiddleware, compose } from 'redux';
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
  
  return createStore(reducer);
}

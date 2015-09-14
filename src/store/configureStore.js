import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import createDevToolsWindow from '../utils/debug/createDevToolsWindow';
import { devTools, persistState } from 'redux-devtools';

export default function configureStore() {
  if (DEBUG) {
    let finalCreateStore;

    const logger = createLogger({
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
      createDevToolsWindow(store);
    };

    return store;
  }
  
  return createStore(reducer);
}

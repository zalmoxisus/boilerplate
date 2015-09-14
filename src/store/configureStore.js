import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from '../reducers';

export default function configureStore() {
  if (DEBUG) {
    let finalCreateStore;

    const logger = createLogger({
      level: 'info',
      collapsed: true
    });

    finalCreateStore = applyMiddleware(
      logger
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
  
  return createStore(reducer);
}

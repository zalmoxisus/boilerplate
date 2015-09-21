import React from 'react';
import { Provider } from 'react-redux';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import App from './containers/App';
import store from './store';


React.render(
  <div>
    {
      // The child must be wrapped in a function
      // to work around an issue in React 0.13.
    }
    <Provider store={store}>
      {() => <App />}
    </Provider>
    <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.body
);

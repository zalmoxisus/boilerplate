import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import Hello from './components/Hello';
import configureStore from './store/configureStore';

//Needed for onTouchTap
//Can go away when react 1.0 release
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App><Hello/></App>}
  </Provider>,
  document.body
);

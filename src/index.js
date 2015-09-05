import React from 'react';
import App from './containers/App';
import Hello from './components/Hello';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
injectTapEventPlugin();

React.render(<App><Hello/></App>, document.body);

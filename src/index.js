import React from 'react';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
injectTapEventPlugin();

React.render(<App />, document.body);

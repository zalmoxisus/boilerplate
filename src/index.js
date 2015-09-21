import React from 'react';
import Root from './containers/Root'

//Needed for onTouchTap
//Can go away when react 1.0 release
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

React.render(<Root />, document.body);

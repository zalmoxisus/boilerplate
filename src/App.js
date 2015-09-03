import React, { Component } from 'react';
import ThemeManager from './UI/ThemeManager.js';
import { AppBar } from 'material-ui';

export default class App extends Component {
  static get childContextTypes() {
    return {
      muiTheme : React.PropTypes.object
    };
  }
  
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <h1>{___('Hello, world')}!</h1>
      </div>
    );
  }
}

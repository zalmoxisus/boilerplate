import React, { Component } from 'react';
import ThemeManager from './UI/ThemeManager.js';
import { AppBar } from 'material-ui';
import LeftNav from './components/LeftNav';

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
          zDepth={1}
          onLeftIconButtonTouchTap={this._toggleNav} />
        <LeftNav ref="leftNav"/>
        <h1>{___('Hello, world')}!</h1>
      </div>
    );
  }

  _toggleNav = () => {
    this.refs.leftNav.toggle();
  }
}

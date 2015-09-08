import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import ThemeManager from '../themes/ThemeManager.js';
import LeftNav from '../components/LeftNav';

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
          iconClassNameRight="icon-expand_more"
          onLeftIconButtonTouchTap={this._toggleNav} />
        <LeftNav ref="leftNav"/>
        {this.props.children}
      </div>
    );
  }

  _toggleNav = () => {
    this.refs.leftNav.toggle();
  }
}

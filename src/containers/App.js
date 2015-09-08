import React, { Component } from 'react';
import { AppCanvas, AppBar } from 'material-ui';
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
      <AppCanvas>
        <AppBar
          title="Title"
          zDepth={1}
          iconClassNameRight="icon-expand-more"
          onLeftIconButtonTouchTap={() => this.refs.leftNav.toggle()} />
        <LeftNav ref="leftNav"/>
        <div style={{paddingTop: '4pc'}}>
          {this.props.children}
        </div>
      </AppCanvas>
    );
  }
}

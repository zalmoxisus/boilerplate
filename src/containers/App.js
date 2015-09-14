import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppCanvas, AppBar } from 'material-ui';
import ThemeManager from '../themes/ThemeManager.js';
import { toggleLeftNav } from '../actions/leftNav';
import LeftNav from '../components/LeftNav';

class App extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  
  render() {
    const { leftNavToggled, onToggleLeftNav } = this.props;
    return (
      <AppCanvas>
        <AppBar
          title="Title"
          zDepth={1}
          iconClassNameRight="icon-expand-more"
          onLeftIconButtonTouchTap={onToggleLeftNav} />
        <LeftNav toggled={leftNavToggled} />
        <div style={{paddingTop: '4pc'}}>
          {this.props.children}
        </div>
      </AppCanvas>
    );
  }
}

App.childContextTypes = {
  muiTheme : React.PropTypes.object
};

// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(state) {
  return {
    leftNavToggled: state.leftNav.toggled
  };
}

// Which action creators does it want to receive by props
function mapDispatchToProps(dispatch) {
  return {
    onToggleLeftNav: () => dispatch(toggleLeftNav())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

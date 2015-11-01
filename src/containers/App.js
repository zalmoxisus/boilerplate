import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
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
    const { pushState, leftNavToggled, toggleLeftNav } = this.props;
    return (
      <AppCanvas>
        <AppBar
          title="Title"
          zDepth={1}
          iconClassNameRight="icon-expand-more"
          onLeftIconButtonTouchTap={toggleLeftNav} />
        <LeftNav toggled={leftNavToggled} pushState={pushState} />
        <div style={{paddingTop: '4pc'}}>
          {this.props.children}
        </div>
      </AppCanvas>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(state) {
  return {
    //q: state.router.location.query.q,
    leftNavToggled: state.leftNav.toggled
  };
}

// Which action creators does it want to receive by props
const mapDispatchToProps = {
  toggleLeftNav,
  pushState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

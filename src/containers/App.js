import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// Which part of the Redux global state does our component want to receive as props
function mapStateToProps(state) {
  return {
    //q: state.router.location.query.q,
  };
}

// Which action creators does it want to receive by props
const mapDispatchToProps = {
  pushState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { ReduxRouter } from 'redux-router';
import configureStore from '../store/configureStore';
import App from './App';
import Hello from '../components/Hello';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>{() =>
        <ReduxRouter>
          <Route path="/" component={App}>
            <IndexRoute component={Hello}/>
            <Route path="hello" component={Hello}/>
            <Route path="parent" component={Parent}>
              <Route path="child" component={Child}/>
              <Route path="child/:id" component={Child}/>
            </Route>
          </Route>
        </ReduxRouter>
      }</Provider>
    );
  }
}

export default Root;


// Just for demo of parent/child url:

class Parent extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.props.children}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
      </div>
    );
  }
}

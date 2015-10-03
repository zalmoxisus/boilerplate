import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

// Action:
const INCREMENT_COUNTER = {type: 'INCREMENT_COUNTER'};
function increaseAction() {
  return { type: INCREMENT_COUNTER };
}

// For debug only
window.increaseAction = increaseAction;

// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case INCREMENT_COUNTER:
      return {count: count+1};
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);

// For debug only
window.store = store;

// Map Redux state to component props
function mapStateToProps(state)  {
  console.log('state',state);
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction())
  };
}

// Connected Component
// https://github.com/rackt/react-redux#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.body
);
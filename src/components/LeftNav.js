import React from 'react';
import mui from 'material-ui';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

let menuItems = [
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Demo 1' },
  { route: '/hello', text: 'Hello' },
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Demo 2' },
  { route: '/parent', text: 'Parent' },
  { route: '/parent/child', text: 'Child' },
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Link' },
  { type: mui.MenuItem.Types.LINK, payload: '/hello', text: 'Hello' }
];

class LeftNav extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      this.refs.leftNav.toggle();
    }
  }
  
  render () {
    return (
      <mui.LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        onChange={this._onLeftNavChange}/>
    );
  }

  _onLeftNavChange = (e, key, payload) => {
    this.props.pushState(null, payload.route);
  };
}

export default connect(
  // Use a selector to subscribe to state
  state => ({ q: state.router.location.query.q }),

  // Use an action creator for navigation
  { pushState }
)(LeftNav);
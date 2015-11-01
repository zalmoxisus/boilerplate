import React from 'react';
import mui from 'material-ui';

let menuItems = [
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Demo 1' },
  { route: '/hello', text: 'Hello' },
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Demo 2' },
  { route: '/parent', text: 'Parent' },
  { route: '/parent/child', text: 'Child' },
  { type: mui.MenuItem.Types.SUBHEADER, text: 'Link' },
  { type: mui.MenuItem.Types.LINK, payload: '/hello', text: 'Hello' }
];

export default class LeftNav extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.toggled !== this.props.toggled) {
      this.refs.leftNav.toggle();
    }
  }

  _onLeftNavChange = (e, key, payload) => {
    this.props.pushState(null, payload.route);
  };

  render() {
    return (
      <mui.LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        onChange={this._onLeftNavChange}/>
    );
  }
}
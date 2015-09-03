import React from 'react';
import mui from 'material-ui';

let menuItems = [
  {route: 'hello', text: 'Hello'}
];

export default class LeftNav extends React.Component {

  render () {
    return (
      <mui.LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        menuItems={menuItems}
        onChange={this._onLeftNavChange}/>
    );
  }

  toggle = () => {
    this.refs.leftNav.toggle();
  };

  _onLeftNavChange = (e, key, payload) => {
    console.log('selected', payload.route);
  };
}
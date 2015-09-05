import React, { Component } from 'react';
import mui from 'material-ui';
import Radium from 'radium';
let Colors = mui.Styles.Colors;

var styles = {
  base: {
    padding: '1.5em',

    ':hover': {
      backgroundColor: Colors['deepPurple900'],
      color: 'white'
    }
  }
};

@Radium
class Hello extends Component {
  render() {
    return (
      <h1 style={styles.base}>{___('Hello, world')}!</h1>
    );
  }
}

export default Hello;
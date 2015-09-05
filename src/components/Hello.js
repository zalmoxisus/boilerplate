import React, { Component } from 'react';
import Radium from 'radium';

var styles = {
  base: {
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'green',
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
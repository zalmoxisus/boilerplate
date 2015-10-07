import React, { Component } from 'react';
import { Link } from 'react-router';
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
      <div>
        <h1 ref="h1" style={styles.base} onClick={()=>{React.findDOMNode(this.refs['h1']).style.color = 'red'}}>{___('Hello, world')}!</h1>
        <Link to="/parent" style={{marginLeft: 10}}>{ '>>' }Home</Link>
      </div>
    );
  }
}

export default Hello;
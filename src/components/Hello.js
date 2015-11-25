import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const styles = {
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
      <div>
        <h1 ref="h1" style={styles.base} onClick={()=>{React.findDOMNode(this.refs['h1']).style.color = 'red';}}>{___('Hello, world')}!</h1>
        <Link to="/parent" style={{marginLeft: 10}}>{ '>>' }Home</Link>
      </div>
    );
  }
}

export default Hello;
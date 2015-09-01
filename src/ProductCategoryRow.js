import React, { Component } from 'react';

export default class FilterableProductTable extends Component {
  render () {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
};

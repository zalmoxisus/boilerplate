import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false
  };

  handleUserInput = (filterText, inStockOnly) => {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  };

  render () {
    console.log('this.state',this.state);
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
          />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          />
      </div>
    );
  }
};

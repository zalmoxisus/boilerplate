import React from 'react';
import FilterableProductTable from './FilterableProductTable';
var PRODUCTS = require('./products.js');

React.render(<FilterableProductTable products={PRODUCTS} />, document.body);

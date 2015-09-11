var path = require('path');
var webpack = require('webpack');
var I18nPlugin = require('i18n-webpack-plugin');
var languages = require('./lng/languages.js');

module.exports = Object.keys(languages).map(function(language) {
  return {
    name: language,
    entry: './src/index',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: language + '.js'

    },
    plugins: [
      new I18nPlugin(languages['ru'], '___'),
      new webpack.optimize.UglifyJsPlugin({output: {comments: true}}),
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      })
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }]
    }
  };
});
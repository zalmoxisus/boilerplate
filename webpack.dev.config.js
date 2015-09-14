var path = require('path');
var webpack = require('webpack');
var I18nPlugin = require('i18n-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: [
    //'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index' // appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'en.js',
    publicPath: '/dist/'
  },
  plugins: [
    new I18nPlugin(null, '___'), // do not translate
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

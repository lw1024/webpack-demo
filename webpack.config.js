const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: require.resolve('index.js'),
      use: 'imports-loader?this=>window'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ]
};
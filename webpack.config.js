// https://www.robinwieruch.de/webpack-setup-tutorial.
module.exports = {
  entry: './src/renderer/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  // You need BOTH resolve and rules: test to specify the .jsx extension
  // in order to compile React .jsx files.
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  // https://webpack.js.org/configuration/devtool/.
  devtool: 'cheap-module-eval-source-map'
};

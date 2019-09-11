const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const WriteAssetsWebpackPlugin = require('write-assets-webpack-plugin');

// https://www.robinwieruch.de/webpack-setup-tutorial.
module.exports = {

  // https://github.com/gaearon/react-hot-loader#getting-started
  entry: ['react-hot-loader/patch', './src/renderer/index.js'],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      // Configure HtmlWebpackPlugin.
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false
            }
          }
        ]
      },

      // Configure CSS.
      // https://webpack.js.org/guides/hot-module-replacement/#hmr-with-stylesheets
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

    ]
  },
  // You need BOTH resolve and rules: test to specify the .jsx extension
  // in order to compile React .jsx files.
  resolve: {
    extensions: ['*', '.js', '.jsx'],

    // https://github.com/gaearon/react-hot-loader
    // https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  output: {
    path: __dirname + '/dist',
    // Use relative filesystem path when using write to disk.
    publicPath: './',
    // Use / path when using URL (serving from webpack memory).
    // publicPath: '/',
    // Or explicit with webpack.
    // publicPath: `http://localhost:${port}/bundle/`
    filename: 'bundle.js'
  },
  // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
  // https://webpack.js.org/guides/development/#using-webpack-dev-server
  devServer: {
    contentBase: './dist',
  },
  // https://webpack.js.org/configuration/devtool/.
  devtool: 'cheap-module-eval-source-map',

  // Is this really required?
  // target: 'electron-renderer',

  plugins: [

    // Configure HtmlWebpackPlugin.
    // Takes input index.html, and outputs an index.html with script tag included.
    // Docs: https://webpack.js.org/plugins/html-webpack-plugin/
    // Be aware of https://github.com/jantimon/html-webpack-plugin/issues/895.
    new HtmlWebpackPlugin({
      // This is the input file.
      template: "./src/renderer/index.html",
      // This is the name of the ouput file.
      filename: "./index.html",
      minify: {
        collapseWhitespace: false,
        removeAttributeQuotes: true,
        removeComments: false
      },
      // Use in combination with HtmlWebpackHarddiskPlugin.
      // alwaysWriteToDisk: true,
    }),

    // https://github.com/webpack/webpack-dev-server/issues/62
    // https://github.com/euclid1990/write-assets-webpack-plugin
    // Unlike HtmlWebpackHarddiskPlugin, WriteAssetsWebpackPlugin writes both js and html bundles.
    new WriteAssetsWebpackPlugin({ force: true, extension: ['js', 'html'] }),

    // https://github.com/jantimon/html-webpack-harddisk-plugin
    // Used to always write to disk the html file, useful when webpack-dev-server / HMR are being used.
    // new HtmlWebpackHarddiskPlugin({
    //   filename: 'index.html',
    //   outputPath: path.resolve(__dirname, 'dist'),
    // }),

  ],
};

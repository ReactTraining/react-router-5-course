// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'development'
const getClientEnvironment = require('./env')
const env = getClientEnvironment()

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackDevServerConfig = require('./webpack.devserver.config.js')

module.exports = {
  devServer: webpackDevServerConfig,
  // Enhanced dev support (like correct line numbers on errors)
  devtool: 'source-map',
  entry: [path.resolve(process.cwd(), 'config/setup.js'), path.resolve(process.cwd(), 'src/index.js')],
  output: {
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    // Where to create the build
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // Process JS with Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          options: {
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
          },
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Path to HTML file
      template: './public/index.html',
      // Variables listed here in the configurations for HtmlWebpackPlugin become ejs
      // variables for interpolation in the HTML file, accessible with
      // <%- htmlWebpackPlugin.options.[varName] %>. We put our env variables in for HTML access
      env: env.raw,
    }),
    // Make global variables available to the application. We use this to
    // set process.env vars in the front-end
    new webpack.DefinePlugin(env.stringified),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

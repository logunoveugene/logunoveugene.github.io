'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
   new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
      'Tether': 'tether',
      'window.Tether': 'tether'
    }),
      new webpack.ContextReplacementPlugin(/^\.\/locale$/, context => {
    // check if the context was created inside the moment package
    if (!/\/moment\//.test(context.context)) { return }
    // context needs to be modified in place
    Object.assign(context, {
      // include only japanese, korean and chinese variants
      // all tests are prefixed with './' so this must be part of the regExp
      // the default regExp includes everything; /^$/ could be used to include nothing
      regExp: /^\.\/(ja|ko|zh)/,
        // point to the locale data folder relative to moment/src/lib/locale
      request: '../../locale'
    })
  }),
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})

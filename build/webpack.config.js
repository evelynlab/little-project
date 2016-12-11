/*
* @Author: yqy
* @Date:   2016-12-05 18:36:20
* @Last Modified by:   yuqy
* @Last Modified time: 2016-12-09 14:11:59
*/
'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
//路径是相对于package.json所在路径
var entry_map = {
  'index': './public/index/index.js',
  'list': './public/list/list.js',
  'common': ['jquery', 'underscore', './public/global/sass/reset.scss']
}

module.exports = {
  watch: true,
  entry: entry_map,
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(),'dist/'),
    filename: '[name].js',
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      miniChunks: Infinity
      // filename: 'commons.js'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)|(global\/lib\/)/,
        loader: 'babel-loader'
      },
      //不使用插件时的用法,此时不会生成单独的css文件
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.scss$/,
        //!代表先执行 ？是传递给loader的参数
        loader: ExtractTextPlugin.extract('style-loader','css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
      }
    ]
  }
}

/*
* @Author: yqy
* @Date:   2016-12-05 18:36:20
* @Last Modified by:   yqy
* @Last Modified time: 2016-12-06 17:31:09
*/
'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
//路径是相对于package.json所在路径
var entry_map = {
  'index': './public/index/index.js',
}
module.exports = {
  entry: entry_map,
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(),'dist/'),
    filename: '[name].js',
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)|(global\/lib\/)/,
        loader: 'babel-loader'
      },
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

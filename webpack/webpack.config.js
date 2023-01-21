const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  mode: 'development',
  //共有属性
  // entry: './src/index.js', //默认的入口就是index.js
  // //   entry: './foo.js',//报错
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'index.[contenthash].js'
  //   // filename: 'index.js'
  //   // filename: 'main.js' //可以改名字
  //   // filename: 'foo.bundle.js'
  // },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'My App123', //可以改index.html里面的title
  //     template: 'src/assets/index.html'
  //   }),
  // ],
  module: {
    rules: [
      ...base.module.rules,
      {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],//二选一：1.style-loader会放到页面里面。2.抽成文件。开发的时候使用style-loader，因为它快，不用生成文件
    }, ],
  },
};
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',//默认的入口就是index.js
//   entry: './foo.js',//报错
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
    // filename: 'index.js'
    // filename: 'main.js' //可以改名字
    // filename: 'foo.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My App123',//可以改index.html里面的title
    template: 'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

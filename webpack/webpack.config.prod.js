const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    //共有属性
    //   entry: './src/index.js', //默认的入口就是index.js
    //   //   entry: './foo.js',//报错
    //   output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'index.[contenthash].js'
    //     // filename: 'index.js'
    //     // filename: 'main.js' //可以改名字
    //     // filename: 'foo.bundle.js'
    //   },
    //   devtool: 'inline-source-map',
    //   devServer: {
    //     contentBase: './dist',
    //   },
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "/public/path/to/",
                        },
                    },
                    "css-loader",
                ],
            },
        ],
    },
};
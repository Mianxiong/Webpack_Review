const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js', //默认的入口就是index.js
    //   entry: './foo.js',//报错
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
        // filename: 'index.js'
        // filename: 'main.js' //可以改名字
        // filename: 'foo.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App123', //可以改index.html里面的title
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.styl$/,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ], // compiles Styl to CSS                
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
};
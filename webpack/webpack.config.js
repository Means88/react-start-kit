var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../src/index-debug.js')],
        react: ['react']
    },
    output: {
        path: path.resolve(__dirname, '../bin/js'),
        publicPath: 'js',
        filename: "[name]-[chunkhash].js",
        chunkFilename: "[name]-[chunkhash].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react'],
            minChunks: Infinity
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.(jsx?|es6)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.(jsx?|es6)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['babel-plugin-transform-decorators-legacy']
                }
            }, {
                test: /\.s(a|c)ss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};

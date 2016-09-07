var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');


config.entry.app = [path.resolve(__dirname, '../src/index.js')];
config.plugins.unshift(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': '"production"'
        }
    })
);
module.exports = config;

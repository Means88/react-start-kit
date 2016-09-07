var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');

config.devtool = "#cheap-module-eval-source-map";
config.output.filename = "[name].js";
config.output.chunkFilename = "[name].js";

module.exports = config;

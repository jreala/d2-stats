const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-frontend.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map'
});
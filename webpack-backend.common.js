const path = require('path'),
    nodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    entry: "./backend/server.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "server_bundle.js"
    },
    externals: [nodeExternals()]
};
const path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: "./frontend/src/index.html",
        filename: "./index.html"
    });

module.exports = {
    target: "web",
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [htmlWebpackPlugin]
};
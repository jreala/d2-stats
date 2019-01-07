const path = require('path'),
    Webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
    }),
    dotenv = require('dotenv'),
    fs = require('fs');

module.exports = (env) => {
    const currentPath = path.join(__dirname),
        environmentBasePath = `${currentPath}/.env`,
        environmentPath = `${environmentBasePath}.${env.ENVIRONMENT}`,
        finalPath = fs.existsSync(environmentPath) ? environmentPath : environmentBasePath,
        fileEnvironment = dotenv.config({ path: finalPath }).parsed,
        envKeys = Object.keys(fileEnvironment).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(fileEnvironment[next]);
            return prev;
        }, {});

    return {
        target: 'web',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                }
            ]
        },
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            htmlWebpackPlugin,
            new Webpack.DefinePlugin(envKeys)
        ]
    };
};

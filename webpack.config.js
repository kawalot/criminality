const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./frontend/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, './frontend/dist'),
        filename: "main.js",

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                  ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                  ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./frontend/src/index.html"
        })
    ]
};

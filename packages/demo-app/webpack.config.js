const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    devtool: 'source-map',
    entry: './src/index.ts',
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'lerna-typescript-jest-boilerplate demo app'
        })
    ],
    devServer: {
        contentBase: ['node_modules', 'src' ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            { test: /\.(j|t)s(x?)$/, exclude: /node_modules/, loaders: ['ts-loader?transpileOnly=true'] }
        ]
    }
};

module.exports = config;

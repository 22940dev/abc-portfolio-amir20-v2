const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    context: __dirname + "/themes/amirraminfar",
    entry: {
        app: "./static/js/app.js"
    },
    output: {
        path: __dirname + "/themes/amirraminfar/static/",
        filename: "js/[name].bundle.js",
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: [
                    {
                        loader: 'css-loader',
                        query: {importLoaders: 1},
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            })
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url'
        }]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].bundle.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
        new LoaderOptionsPlugin({
            options: {
                postcss: [
                    require('lost'),
                    require("postcss-cssnext")(),
                    require('postcss-font-magician')()
                ]
            }
        }),
    ]
};

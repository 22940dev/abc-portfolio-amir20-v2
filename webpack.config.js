const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');


module.exports = {
    context: __dirname + "/themes/amirraminfar",
    entry: {
        app: "./static/js/app.js"
    },
    output: {
        path: __dirname + "/themes/amirraminfar/static/js/",
        filename: "[name].bundle.js",
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: ['css', 'postcss']
            })
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: {
                    autoprefixer: {
                        browsers: 'last 3 versions'
                    }
                }
            }
        }),
        new ExtractTextPlugin("../css/styles.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ]
};

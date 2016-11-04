const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const lost = require('lost');


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
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: [{
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: lost
                    }
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin("../css/[name].bundle.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ]
};

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', ['css-loader?importLoaders=1', 'postcss-loader'])
        }]
    },
    postcss: function(webpack) {
        return [
            require("postcss-cssnext")(),
            require('lost'),
            require('postcss-font-magician')()
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/[name].bundle.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
    ]
};

var webpack = require("webpack");

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
            jquery: "jquery/src/jquery",
            "typed.js": "typed.js/js/typed",
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ]
};

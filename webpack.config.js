const webpack = require("webpack");

module.exports = {
    // Where to look for code first.
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    // Where to output all code.
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        // So that you don't have to specify file paths.
        alias: {
            // Paths are relative to app.jsx
            Main: "app/components/Main.jsx",
            applicationStyles: "app/styles/app.scss",
            Navigation: "app/components/Navigation.jsx"
        },
        // So that you don't have to specify file endings.
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        // Uses the babel loader on jsx files.
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "eval-source-map"
};

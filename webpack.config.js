var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    //entry: {
    //    app: ["./src/main.js"]
    //},
    output: {
        path: './build/',
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};

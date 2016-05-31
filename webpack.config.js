var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    devtool: 'sourcemap',
    entry: {
        app:'./src/app',
        vendor: ['vue']
    },
    output: {
        path: path.join(__dirname, '/www/'),
        filename: 'index.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue', exclude: /node_modules/},
            { test: /\.js$/, loader:'babel', exclude: /node_modules/}
        ]
    },
    vue: {
    // configure autoprefixer
        autoprefixer: {
          browsers: ['last 2 versions']
        }
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    path: path.join(__dirname,'/www/'),
                    publicPath: '/',
                    filename: 'vendor.js',
                    minChunks: Infinity
              }),
              new webpack.HotModuleReplacementPlugin({ hot: true }),]
};
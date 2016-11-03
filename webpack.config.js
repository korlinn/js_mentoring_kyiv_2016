'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const extractCSS = new ExtractTextPlugin('/bundle.css');
const htmlPlugin = new HtmlWebpackPlugin({
    template: './index.html',
    chunksSortMode: 'dependency'
});


const ENV_MODE = {
    DEV: 'development',
    PROD: 'production'
};

const PATH = {
    SRC: path.join(__dirname, 'src'),
    BUILD: path.join(__dirname, 'public')
};

const NODE_ENV = process.env.NODE_ENV || ENV_MODE.DEV;

module.exports = {
    context: PATH.SRC,
    entry: {
        app: PATH.SRC + '/app.js',
        angular_app: PATH.SRC + '/angular/app.ts',
        polyfill: PATH.SRC + '/angular/polyfill.ts',
        vendor: PATH.SRC + '/angular/vendor.ts'
    },
    output: {
        path: PATH.BUILD,
        publicPath: '/',
        filename: '/[name].js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss', '.html'],
        modules: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader!sass-loader'
                    })
            },
            {
                test: /\.(jpg|png|ttf)$/,
                loader: 'file?name=[path]/[name].[ext]'
            },
            {
                test: /index.html/,
                loader: 'file?name=[path]/[name].[ext]'
            }
        ]
    },
    plugins: [
        extractCSS,
        htmlPlugin
    ],

    watch: NODE_ENV === ENV_MODE.DEV,

    devtool: NODE_ENV === ENV_MODE.DEV ? 'source-map': ''
};
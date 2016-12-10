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
        react_app: PATH.SRC + '/react/app.jsx',
        polyfill: PATH.SRC + '/angular/polyfill.ts',
        vendor: PATH.SRC + '/angular/vendor.ts'
    },
    output: {
        path: PATH.BUILD,
        publicPath: 'http://localhost:3000/',
        filename: '/[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js', '.jsx', '.css', '.scss', '.html'],
        modules: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader', '@angularclass/hmr-loader']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=react'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=react'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: 'to-string-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader!sass-loader'
                    })
            },
            {
                test: /\.(jpg|png|ttf|tpl)$/,
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
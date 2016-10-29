'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractCSS = new ExtractTextPlugin('/bundle.css');
const extractAngularApp = new ExtractTextPlugin('/ang.app.js');

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
        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.(html|jpg|png|ttf)$/,
                loader: 'file?name=[path]/[name].[ext]'
            }
        ]
    },
    plugins: [
        extractCSS,
        extractAngularApp
    ],

    watch: NODE_ENV === ENV_MODE.DEV,

    devtool: NODE_ENV === ENV_MODE.DEV ? 'source-map': ''
};
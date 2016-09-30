'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

const ENV_MODE = {
	DEV: 'development',
	PROD: 'production'
};

var PATH = {
	SRC: path.join(__dirname, 'app'),
	BUILD: path.join(__dirname, 'public')
};

var NODE_ENV = process.env.NODE_ENV || ENV_MODE.DEV;

module.exports = {
	context: PATH.SRC,
	entry: {
		app: PATH.SRC + '/app.js'
	},
	output: {
		path: PATH.BUILD,
		publicPath: '/',
		filename: '/[name].js'
	},
	resolve: {
		modulesDirectories: ['node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules|vendor/,
				loader: 'babel-loader'
			},			
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
			},
			{
				test: /index.html/,
				loader: 'file?name=/[name].html'
			},
			{
				test: /\.(html)$/,
				exclude: /(index.html)/,
				loader: 'file?name=templates/[name].[ext]'
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file?name=[path]/[name].[ext]'
			}
    	]
	},
	plugins: [
        new ExtractTextPlugin('/bundle.css')
    ],

    watch: NODE_ENV === ENV_MODE.DEV,

    devtool: 'source-map'
    // watchOptions: {
    // 	agregateTimeout: 500
    // }
};
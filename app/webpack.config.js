const HtmlWebpackPlugin = require('html-webpack-plugin');
const path							= require('path');
const process					 = require('process');

const host = process.env.APP_HOST || '0.0.0.0';
const port = process.env.APP_PORT || 80;

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		app: [
			`webpack-dev-server/client?http://${host}:${port}/`,
			'./boot'
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].bundle.js.map'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}],
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Contacts',
			template: 'index.ejs',
			env: process.env
		})
	],
	devServer: {
		host: host,
		port: port,
		inline: true,
		stats: {
			colors: true,
			chunks: false
		},
		proxy: {
			'/api': {
				target: 'http://api',
				pathRewrite: {'^/api' : ''}
			}
		}
	}
};

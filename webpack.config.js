const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	devServer: {
		port: 4000,
		historyApiFallback: true,
	},
	entry: {
		home: './pages/home/index.js',
		about: './pages/about/index.js',
		blog: './pages/blog/index.js',
		contact: './pages/contact/index.js',
		landing: './pages/landing/index.js',
		marketing: './pages/marketing/index.js',
		pricing: './pages/pricing/index.js',
		terms: './pages/terms/index.js',
		services: './pages/services/index.js',
		articles: './pages/articles/index.js'
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: '[name].min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
}

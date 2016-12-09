const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: "/assets",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devServer: {
		hot: true,
		inline: true,
		contentBase: 'public/'
	},
	devtool: 'inline-source-map',
};
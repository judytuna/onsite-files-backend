module.exports = {
	entry: { app: './client/app.js' },
	output: {
		filename: 'app.js',
		path: '/',
		publicPath: '/dist',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		}],
	},
	performance: {
		hints: false,
	},
}

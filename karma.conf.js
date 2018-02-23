//need process.env.CHROME_BIN to work
module.exports = config => {
	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: ['test/browser.js'],
		exclude: [],
		preprocessors: {},
		reporters: ['mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		concurrency: Infinity,
		preprocessors: {
			'**/*.js': ['webpack']
		},
		webpack: {
			module: {
				loaders: [
					{
						test: /\.js$/,
						loader: 'babel-loader'
					}
				]
			}
		},
		webpackMiddleware: {
			stats: 'errors-only'
		}
	})
}

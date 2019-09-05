module.exports = function(config) {
	config.set({
		basePath: '',
		singleRun: false,
		autoWatch: true,
		frameworks: ['mocha', 'chai', 'sinon', 'browserify'],
		files: [
			{ pattern: 'test/mock/**/*.html', included: false, served: true },
			{ pattern: 'axe.js', included: false, served: true },

			'lib/core/index.js',
			'lib/core/*/index.js',
			'lib/core/**/index.js',
			'lib/core/**/*.js',

			'test/testutils.js',
			'test/version.js',

			'test/core/**/*.js'
		],
		proxies: {
			'/mock': '/base/test/mock',
			'/lib': '/base/lib',
			'/axe.js': '/base/axe.js'
		},
		browsers: ['Chrome'],
		preprocessors: {
			'lib/core/imports/index.js': ['browserify']
		},
		reporters: ['mocha']
	});
};

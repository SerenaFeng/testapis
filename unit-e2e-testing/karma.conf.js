module.exports = function (config) {
	config.set({
		frameworks: ['jasmine'],
		files: [
			"lib/angular/angular.js",
			"lib/angular/angular-mocks.js",
			"src/index.js",
			"test/unit/indexSpec.js"
		],
		autoWatch: true,
		browsers: [ 'ChromeCI'],
                customLaunchers: {
                        ChromeCI: {
                        base: 'Chrome',
                        flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
                   }
                },
		singleRun: true,
		reporters: ['progress', 'coverage'],
        preprocessors: { 'src/*.js': ['coverage'] }
	});
};

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
		browsers: ['Chrome'],
		singleRun: true,
		reporters: ['progress', 'coverage'],
        preprocessors: { 'src/*.js': ['coverage'] }
	});
};

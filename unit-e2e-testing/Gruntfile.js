module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'src'
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		protractor: {
			e2e: {
				options: {
					args: {
						specs: ['test/e2e/indexSpec.js']
					},
					configFile: 'protractor.conf.js',
					keepAlive: true
				}
			}
		}
	});
	grunt.registerTask('test', [
		'karma:unit'
	]);
	grunt.registerTask('e2e', [
		'connect:server',
		'protractor:e2e'
	]);
}

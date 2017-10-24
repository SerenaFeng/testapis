exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		browserName: 'chrome',
                chromeOptions: {args: ["no-sandbox", "--headless", "--disable-gpu"]}
	},
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};

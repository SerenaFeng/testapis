'use strict';

describe('Testing the DOM - End to End Testing', function () {
	it('should bind to input', function () {
		browser.get('http://0.0.0.0:8000/');
		var nameInput = element(by.model('name'));
		var nameOutput = element(by.binding('name'));
		expect(nameOutput.getText()).toBe('Hello');
		nameInput.clear();
		nameInput.sendKeys('World');
		expect(nameOutput.getText()).toBe('World');

	});
	it('should bind the users when click the button ', function () {
		var buttonLoad = element(by.buttonText('Load Users'));
		buttonLoad.click();
		var firstUsername = element(by.repeater('user in users')
				.row(0).column('{{name}}'));
		expect(firstUsername).toBeDefined();
		expect(buttonLoad.isDisplayed()).toBeFalsy();
	});
});

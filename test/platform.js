var expect = require('expect.js');
var platform = require('../').platform;

describe('platform', function() {
	it('should have a string property "PCAP_LIBRARY"', function() {
		expect(platform.PCAP_LIBRARY).to.be.a('string');
	});
});

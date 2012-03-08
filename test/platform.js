var expect = require('expect.js'),
    pcap = require('../');

describe('platform', function() {
	it('should have a string property "PCAP_LIBRARY"', function() {
		expect(pcap.platform.PCAP_LIBRARY).to.be.a('string');
	});
	
	it('should have a function "systemNameToPcapName"', function() {
		expect(pcap.systemNameToPcapName).to.be.a('function');
	});
});

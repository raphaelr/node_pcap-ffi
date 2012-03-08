var expect = require('expect.js'),
    path = require('path'),
    pcap = require('../');

describe('open', function() {
	var handle;
	
	afterEach(function() {
		if(handle) handle.close();
	});
	
	function expectHandleToBeOk()
	{
		expect(handle).to.be.ok();
		expect(handle.ptr).to.be.ok();
		expect(handle.ptr.isNull()).not.to.be.ok();
	}
	
	it('should return a handle when calling openDead', function() {
		handle = pcap.openDead();
		expectHandleToBeOk();
	});
	
	it('should return a handle when calling openOffline', function() {
		handle = pcap.openOffline(path.join(__dirname, 'data/capture.pcap'));
		expectHandleToBeOk();
	});
	
	it('should throw an PcapError if openOffline called with an invalid file', function() {
		expect(function() { pcap.openOffline(path.join(__dirname, 'data/DONTEXIST')).close(); }).
			to.throwException(function(e) { expect(e).to.be.a(pcap.PcapError); });
	});
});

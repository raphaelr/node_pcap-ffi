var expect = require('expect.js');
var platform = require('../').platform;

describe('platform', function() {
	it('should have a string property "pcap_library"', function() {
		expect(platform.pcap_library).to.be.a('string');
	});
	
	it('should have a function called "interfaces"', function() {
		expect(platform.interfaces).to.be.a('function');
	});
	
	describe('interfaces', function() {
		var interfaces;
		
		beforeEach(function() {
			interfaces = platform.interfaces();
		});
		
		it('should return an object', function() {
			expect(interfaces).to.be.an('object');
		});
		
		it('should contain at least one interface', function() {
			expect(interfaces).to.not.be.empty();
		});
		
		it('should have a string property "name"', function() {
			expect(interfaces[0].name).to.be.a('string');
		});
		
		it('should have a string property "description"', function() {
			expect(interfaces[0].description).to.be.a('string');
		});
		
		it('should have a property "physicalAddress"', function() {
			expect(interfaces[0]).to.have.property('physicalAddress');
		});
	});
});

var os = require('os'),
    _ = require('underscore');

var pcap = module.exports;

var parts = ['platform'];

_.each(parts, function(part) {
	copyProperties(pcap, require('./' + part));
});

function copyProperties(dst, src) {
	for(var key in src) {
		dst[key] = src[key];
	}
}

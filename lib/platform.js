var _ = require('underscore'),
    os = require('os'),
    path = require('path'),
    glob = require('glob');

var platform = module.exports = { };

switch(os.platform()) {
case 'win32':
	platform.PCAP_LIBRARY = 'wpcap';
	platform.pcapName = function(systemName) {
		return '\\Device\\NPF_' + systemName;
	};
	break;
default:
	var libpcap = process.env.LIBPCAP_PATH;
	if(!libpcap) {
		var matches = glob.sync('{/lib/,/usr/lib/,/usr/local/lib/}libpcap.so*');
		if(!matches.length) {
			throw new Error('libpcap was not found on your system. If you have libpcap installed' +
				'on your system, set the "LIBPCAP_PATH" environment variable to point to your' +
				'libpcap.so');
		}
		matches = _.collect(matches, function(fullpath) {
			return [path.basename(fullpath), fullpath];
		}).sort(function(a, b) {
			return a[0].localeCompare(b[0]);
		}).reverse();
		libpcap = matches[0][1].replace(/\.so$/, '');
	}
	platform.PCAP_LIBRARY = libpcap;
	platform.pcapName = function(systemName) { return systemName; };
}

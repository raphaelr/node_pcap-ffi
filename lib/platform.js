var os = require('os');

var platform = module.exports;

switch(os.platform()) {
case 'win32':
	platform.PCAP_LIBRARY = 'wpcap';
	break;
default:
	platform.PCAP_LIBRARY = 'libpcap';
}

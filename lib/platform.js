var os = require('os');

var pcap = module.exports,
    platform = pcap.platform = { };

switch(os.platform()) {
case 'win32':
	platform.PCAP_LIBRARY = 'wpcap';
	platform.pcapName = function(systemName) {
		return '\\Device\\NPF_' + systemName;
	};
	break;
default:
	platform.PCAP_LIBRARY = 'libpcap';
}

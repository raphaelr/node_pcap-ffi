var ffi = require('node-ffi'),
    platform = require('./platform');

var raw = module.exports = new ffi.Library(platform.PCAP_LIBRARY, {
	"pcap_close": ['void', ['pointer']],
	"pcap_open_live": ['pointer', ['string', 'int', 'int', 'int', 'pointer']],
	"pcap_open_dead": ['pointer', ['int', 'int']],
	"pcap_open_offline": ['pointer', ['string', 'pointer']]
});

raw.createErrbuf = function() {
	return new ffi.Pointer(256);
}


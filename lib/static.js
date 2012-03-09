var pcap = module.exports = { },
    ffi = require('node-ffi'),
    raw = require('./raw'),
    Handle = require('./handle');

pcap.openLive = function(name, snaplen, promisc, timeout) {
	var errbuf = raw.createErrbuf();
	var ptr = raw.pcap_open_live(name.toString(), snaplen || 65535, promisc ? 1 : 0, timeout || 0, errbuf);
	if(ptr.isNull()) {
		var text = errbuf.getCString();
		ffi.free(errbuf);
		throw new Error(text);
	}
	return new Handle(ptr);
};

pcap.openDead = function(linktype, snaplen) {
	var ptr = raw.pcap_open_dead(linktype || 1, snaplen || 65535);
	return new Handle(ptr);
};

pcap.openOffline = function(filename) {
	var errbuf = raw.createErrbuf();
	var ptr = raw.pcap_open_offline(filename.toString(), errbuf);
	if(ptr.isNull()) {
		var text = errbuf.getCString();
		ffi.free(errbuf);
		throw new Error(text);
	}
	return new Handle(ptr);
};

var pcap = module.exports = { },
    raw = require('./raw'),
	Handle = require('./handle'),
	PcapError = require('./error');

pcap.openLive = function(name, snaplen, promisc, timeout) {
	var errbuf = raw.createErrbuf();
	var ptr = raw.pcap_open_live(name.toString(), snaplen || 65535, promisc ? 1 : 0, timeout || 0, errbuf);
	if(ptr.isNull()) {
		throw new PcapError(errbuf.getCString());
	}
	return new Handle(ptr);
}

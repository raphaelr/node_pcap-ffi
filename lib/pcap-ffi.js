var pcap = module.exports = {
	platform: require('./platform'),
	PcapError: require('./error'),
	raw: require('./raw')
};

copyProperties(pcap, require('./open_close'));
pcap.systemNameToPcapName = pcap.platform.pcapName;

function copyProperties(dst, src) {
	for(var key in src) {
		dst[key] = src[key];
	}
}

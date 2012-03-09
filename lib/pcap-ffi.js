var pcap = module.exports = {
	platform: require('./platform'),
	raw: require('./raw')
};

copyProperties(pcap, require('./static'));
pcap.systemNameToPcapName = pcap.platform.pcapName;

function copyProperties(dst, src) {
	for(var key in src) {
		dst[key] = src[key];
	}
}

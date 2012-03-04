var raw = require('./raw');

var Handle = module.exports = function(ptr) {
	this.ptr = ptr;
};

Handle.prototype.close = function() {
	raw.pcap_close(this.ptr);
};

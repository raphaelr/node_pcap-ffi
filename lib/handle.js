var raw = require('./raw'),
    PcapError = require('./error'),
    ffi = require('node-ffi');

var Handle = module.exports = function(ptr) {
	this.ptr = ptr;
};

Handle.prototype.close = function() {
	if(this.ptr !== ffi.Pointer.NULL) {
		raw.pcap_close(this.ptr);
		this.ptr = ffi.Pointer.NULL;
	}
};

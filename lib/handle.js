var raw = require('./raw'),
    ffi = require('node-ffi');

var Handle = module.exports = function(ptr) {
	this.ptr = ptr;
};

Handle.prototype.close = function() {
	if(!this.ptr.isNull()) {
		raw.pcap_close(this.ptr);
		this.ptr = ffi.Pointer.NULL;
	}
};

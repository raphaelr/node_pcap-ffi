var ffi = require('node-ffi'),
    util = require('util');

var common = module.exports;

var kernel32 = new ffi.Library('kernel32', {
	'GetLastError': ['ulong', []],
	'FormatMessageA': ['ulong', ['ulong', 'pointer', 'ulong', 'ulong', 'pointer', 'ulong', 'pointer']],
	'LocalFree': ['pointer', ['pointer']]
});

common.WindowsError = function(text) {
	this.name = 'WindowsError';
	this.message = text || "Windows API call failed";
};
util.inherits(common.WindowsError, Error);

common.formatMessage = function(errorcode) {
	var buffer = new ffi.Pointer(ffi.Bindings.POINTER_SIZE);
	var result = kernel32.FormatMessageA(0x100 | 0x1000 | 0x200, ffi.Pointer.NULL, errorcode, 1024, buffer, 0, ffi.Pointer.NULL);
	if(!result) {
		throw new common.WindowsError('FormatMessage failed: ' + kernel32.GetLastError());
	}
	var str = buffer.getPointer().getCString();
	kernel32.LocalFree(buffer);
	return str;
};

common.error = function(errorcode) {
	throw new common.WindowsError(common.formatMessage(errorcode) + ' (Error code ' + errorcode + ')');
};

common.readUCS2 = function(pointer, advance) {
	var ptr = advance ? pointer : pointer.clone();
	var array = [], ch;
	while(ch = ptr.getUInt16(true)) {
		array.push(ch);
	}
	return new Buffer(array).toString();
};

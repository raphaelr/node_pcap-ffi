var util = require('util');

var PcapError = module.exports = function(text) {
	this.type = 'PcapError';
	this.message = text;
};
PcapError.prototype = new Error();
PcapError.prototype.constructor = PcapError;

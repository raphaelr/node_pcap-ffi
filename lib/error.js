var util = require('util');

var PcapError = module.exports = function(text) {
	this.type = 'PcapError';
	this.message = text;
};
util.inherits(PcapError, Error);

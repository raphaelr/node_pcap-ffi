var version = require('os').release().split('.');
if(version[0] >= 6) {
	module.exports = require('./windows_gte_vista');
} else {
	module.exports = require('./windows_lt_vista');
}

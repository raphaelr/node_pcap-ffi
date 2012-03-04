var os = require('os');

var platform;
switch(os.type()) {
case 'Windows_NT':
	platform = require('./platform/windows_nt');
	break;
default:
	throw new Error('Unsupported operating system: ' + os.type());
}

module.exports = { platform: platform };

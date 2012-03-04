var _ = require('underscore'),
    fs = require('fs'),
    glob = require('glob'),
    showdown = (new (require('showdown').Showdown.converter)).makeHtml,
    jqtpl = require('jqtpl'),
    path = require('path'),
	rimraf = require('rimraf'),
	util = require('util');

var docdir = path.join(__dirname, '..', 'doc'),
    inputdir = path.join(docdir, 'input'),
    datadir = path.join(docdir, 'data'),
    outputdir = path.join(docdir, 'output');

rimraf(outputdir, function(err) {
	if(err) throw err;
	fs.mkdir(outputdir, undefined, function(err) {
		if(err) throw err;
		parseInputFiles();
		copyDataFiles();
	});
});

function continueWithTemplateLoading() {
	parseInputFiles();
	copyDataFiles();
}

function parseInputFiles() {
	var template_html = fs.readFileSync(path.join(datadir, 'template.html'), 'utf8')
	jqtpl.template('doc', template_html);
	
	glob('doc/input/**/*.{md,markdown}', {}, function(err, matches) {
		if(err) throw err;
		_.each(matches, function(match) {
			fs.readFile(match, 'utf8', function(err, data) {
				if(err) throw err;
				data = showdown(data);
				var title = data.match(/<h1(?:.*?)>(.*?)<\/h1>/)[1];
				data = jqtpl.tmpl('doc', { content: data, title: title });
				var outfile = match.replace(/^doc\/input\/(.*)\.(md|markdown)$/, 'doc/output/$1.html');
				fs.writeFile(outfile, data, 'utf8');
			});
		});
	});
}

function copyDataFiles() {
	glob('doc/data/**/*', {}, function(err, matches) {
		if(err) throw err;
		_.each(matches, function(match) {
			if(match === 'doc/data/template.html') return;
			var outfile = match.replace(/^doc\/data\/(.*)$/, 'doc/output/$1');
			util.pump(fs.createReadStream(match), fs.createWriteStream(outfile));
		});
	});
}

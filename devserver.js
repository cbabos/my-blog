'use strict';

var harp = require('harp');
var cp = require('child_process');

var settings = {
	source: './public/',
	destination: __dirname + '/www/',
	runport: 9000
};

var bumpHelp = function() {
	var text = 'To bump version you need to give the type of the change: ' +
		'patch, minor, major'; 
	console.log(text);
};

switch (process.argv[2]) {
	case 'bump': 
		var semver = require('semver');
		var releaseTypes = ['patch', 'minor', 'major'];
		var packageJSON = require('./package.json');
		var version = packageJSON.version;
		var releaseType = process.argv[3];
		
		// If we don't given correct release type then show help and exit
		if (!releaseTypes.some(function(current) {
			return releaseType === current;
		})) {
			bumpHelp();
			process.exit(0);
		}

		var newVersion = semver.inc(version, releaseType);
		packageJSON.version = newVersion;
		require('fs').writeFileSync('./package.json', 
			JSON.stringify(packageJSON, null, 2)
		);

		cp.execSync('git add package.json && git commit -m "' + newVersion + '"');
		cp.execSync('git tag v' + newVersion); 
	break;
	case 'compile': 
		console.log('--- cbabos.yourweb.hu ---\n\nTrying to compile the site...');
		harp.compile(settings.source, settings.destination, function(errors) {
			if (errors) {
				console.log(errors);
				process.exit(1);
			} else {
				console.log('Compile success!');	
			}
		});
	break;
	default: 
	case 'serve':
		console.log('--- cbabos.yourweb.hu ---\n\nTrying to start the site...');
		harp.server(settings.source, {
			port: settings.runport 
		}, function() {
			console.log('[Start]: OK');
			cp.exec('open http://localhost:' + settings.runport + '/');
		});
	
	break;
}

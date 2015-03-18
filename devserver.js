'use strict';

var harp = require('harp');
var cp = require('child_process');

var settings = {
	source: './src/',
	destination: __dirname + '/www/',

	runport: 9000
};

switch (process.argv[2]) {
	case 'compile': 
		console.log('--- cbabos.yourweb.hu ---\n\nTrying to compile the site...');
		harp.compile(settings.source, settings.destination, function(errors) {
			if (errors) {
				console.log(errors);
				process.exit(1);
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

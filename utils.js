'use strict';

var fs = require('fs'); 

var utils = {};
	
/**
 * @param string
 * @return string
 */
utils.slugify = function(whatToSlug) {
	var slugUtil = require('slug');
	var slug = slugUtil(whatToSlug).toLowerCase();
	return slug;
};

/**
 * @param {Date.object}
 * @return string in format Y-m-d H:i:s
 */
utils.toIsoDate = function(date) {
	var date = date.toISOString().
		match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);
	
	return date[1] + ' ' + date[2];
};

utils.newPost = function(title) {
	var slug = utils.slugify(title);
	var postData = {
		title:     title,
		date:      utils.toIsoDate( new Date() ),
		published: false
	};

	var posts = require('./public/posts/_data.json');
	posts[slug] = postData;

	fs.writeFileSync('./public/posts/_data.json', 
		JSON.stringify(posts, null, 2));

	fs.writeFileSync('./public/posts/' + slug + '.md', 
		title + '\n===\n\nPut content here...\n');
};

utils.uncssTask = function() {
	var glob = require('glob');
	var htmlFilePattern = './www/**/*.html';
	
	glob(htmlFilePattern, function(error, files) {
		if (error) {
			console.log("Error happened: ", error);
			process.exit[1];
		}

		// We have our html files, now lets load and fire uncss
		var uncss = require('uncss');
		var cssmin = require('cssmin');
		var uncssOptions = {
			uncssrc: '.uncssrc',
			htmlroot: './www/'
		};

		uncss(files, uncssOptions, function(error, output) {
			if (error) {
				console.log('UNCSS runtime error: ' + error);
				process.exit(1);
			}

			output = cssmin(output); 
			fs.writeFileSync('./www/main.css', output);
			console.log('uncss finished');
		});
	});
};

utils.bumpHelp = function() {
	var text = 'To bump version you need to give the type of the change: ' +
		'release-patch, release-minor, release-major\n\n' + 
		'Example: npm run release-major'; 
	console.log(text);
};

module.exports = utils;

'use strict';

let config;

import gulp			from 'gulp'; 
import eslint		from 'gulp-eslint';
import jsonlint from 'gulp-jsonlint';

config = {
	"globs": {
		"js"	: ['**/*.js',		'!node_modules/**'],
		"json": ['**/*.json',	'!node_modules/**']
	}
};

gulp.task("lint:javascript", () => {
	return gulp.src(config.globs.js)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task("lint:json", () => {
	return gulp.src(config.globs.json)
		.pipe(jsonlint())
		.pipe(jsonlint.failOnError());
});

'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pageBuilder = require('./app/pageBuilder');

const outputFolder = './www';

gulp.task('build-images', () => {
	gulp.src('./public/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./www/images'));
});

gulp.task('build-pages', () => {
	pageBuilder(gulp, outputFolder);
});

gulp.task('default', () => {
	console.log('Hi bro');
});

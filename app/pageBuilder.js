var fs = require('fs');
var moment = require('moment');
var marky = require('marky-markdown');

var getContent = function (slug, meta) {
	var fileName = './public/posts/' + slug + '.md';
	var content = fs.readFileSync(fileName, 'utf8');
	content = marky(content);

	content('h1')
		.append(
				'<small>' + moment(meta.date).format('DD/MM/YY') + '</small>' 
				);

	return content.html().replace(/\/images/g, "images");
};

module.exports = function(gulp, outputFolder) {
	var posts = require('../public/posts/_data.json');
	var detailTemplate = fs.readFileSync('./layout/detail.html', 'utf8');
	var indexTemplate = fs.readFileSync('./layout/index.html', 'utf8');

	var postLinks = Object.keys(posts)
		.filter(function(slug) {
				return posts[slug].published;
				})
	.map(function(fileName) {
			var newFileName = './www/' + fileName + '.html';

			var html = detailTemplate.replace(
					/#content/, 
					getContent(fileName, posts[fileName])
					);
			fs.writeFile(newFileName, html);
			console.log(newFileName + ' created/updated.');

			return {
			"title": posts[fileName].title,
			"href": './' + fileName + '.html'
			};
			});

	var indexContent = indexTemplate.replace(/#links/, 
			postLinks.reverse().map(function(current) {
				return '<li><a href="' + current.href + '">' + current.title + '</a></li>'; 
				}).join(''));

	fs.writeFile('./www/index.html', indexContent);
	console.log('index.html created');

};

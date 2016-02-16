'use strict';

import moment from 'moment';
import fs from 'fs';
import utils from './utils';

const postTemplate = '%title%\n===\n\nContent is under upload...\n';

let posts = require('../public/posts.json'); 
let getPost, getPosts, findPost, addPost, delPost, 
		isMatching, createPostFile;

delPost = (identifier) => {
	const post = getPost(identifier);
	
	try {
		fs.unlink('./public/posts/' + post.slug + '.md');
		posts = posts.filter(current => current.slug !== post.slug);
	} catch (e) {
		console.log("Error occured deleting post. \n", e);	
	}

	return posts; 
}

createPostFile = (post) => {
	fs.writeFileSync('./public/posts/' + post.slug + '.md', 
		postTemplate.replace(/%title%/, post.title)
	);	
};

addPost = (postData) => {
	Object.assign(postData, {
		slug: utils.getSlug(postData.title),
		date: moment().format('Y-M-D hh:mm:ss'),
		published: false 
	});

	createPostFile(postData);
	posts.push(postData);

	return posts;
};

/** 
 * @param {title: String, date: String, published: Boolean} post
 * @param String identifier
 * @return Boolean
 */
isMatching = (post, identifier) => {
	return Object.keys(post)
		.some(field => utils.isInStr(identifier, post[field].toString()));
}

/**
 * @param String identifier
 * @return [{title: String, date: String, published: Boolean}, ...]
 */
getPosts = (identifier) => {
	identifier = identifier || '';

	return posts.filter(post => isMatching(post, identifier));
};

/**
 * @param String identifier
 * @return {title: String, date: String, published: Boolean}
 */
getPost = (identifier) => {
	const posts = getPosts(identifier);

	return posts ? posts[0] : false;
};

/** 
 * @param [{title: String, date: String, published: Boolean}, ...] givenPosts
 * @return {}
 */
module.exports = (givenPosts) => {
	posts = utils.deepCopy(givenPosts) || posts || {};

	return {
		"getPost": getPost,
		"getPosts": getPosts,
		"add": addPost,
		"delete": delPost
	};
};

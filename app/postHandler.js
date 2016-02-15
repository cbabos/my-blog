'use strict';

import moment from 'moment';

let posts = require('../public/posts.json'); 
let getPost, getPosts, findPost, addPost, delPost, 
		isMatching, isInStr, deepCopy;

addPost = (postData) => {
	posts.push(Object.assign(postData, {
		slug: 'test-post',
		date: moment().format('Y-M-D hh:mm:ss'),
		published: false 
	}));

	return posts;
};

/** 
 * @param String what
 * @param String where
 * @return Boolean
 */
isInStr = (what, where) => {
	return where.toLowerCase().indexOf(what.toLowerCase()) !== -1;
}

/** 
 * @param {title: String, date: String, published: Boolean} post
 * @param String identifier
 * @return Boolean
 */
isMatching = (post, identifier) => {
	return Object.keys(post)
		.some(field => isInStr(identifier, post[field].toString()));
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

deepCopy = src => JSON.parse(JSON.stringify(src));

/** 
 * @param [{title: String, date: String, published: Boolean}, ...] givenPosts
 * @return {}
 */
module.exports = (givenPosts) => {
	posts = deepCopy(givenPosts) || posts || {};

	return {
		"getPost": getPost,
		"getPosts": getPosts,
		"add": addPost,
		"delPost": delPost
	};
};

'use strict';

let posts = require('../public/posts.json'); 
let getPost, getPosts, findPost, addPost, delPost, 
		isMatching, isInStr;

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

	const slug = Object.keys(posts)
		.filter(current => isMatching(
					Object.assign(posts[current], {slug: current}), 
					identifier) 
				);

	return slug ? slug.map(currentSlug => posts[currentSlug]) : false;
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
	posts = givenPosts || posts || {};

	return {
		"getPost": getPost,
		"getPosts": getPosts,
		"addPost": addPost,
		"delPost": delPost
	}
};

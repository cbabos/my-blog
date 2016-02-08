import assert from 'assert';
import postHandler from '../app/postHandler.js';

let samplePosts;
let loadSamplePosts = () => {
	samplePosts = require('./fixture/samplePosts.json');
}

describe('Querying posts', () => {
	it('should get all posts back', () => {
		loadSamplePosts();

		const posts = postHandler(samplePosts).getPosts()
		assert.equal(typeof posts, 'object');
		assert.equal(posts.hasOwnProperty('length'), true);
		assert.strictEqual(posts.length, 3);
	});

	it('should get `Sample Post` back', () => {
		loadSamplePosts();

		const post = postHandler(samplePosts).getPost('sample-post');
		assert.strictEqual(typeof post, 'object');
		assert.equal(post.title, 'Sample Post'); 
	});
})

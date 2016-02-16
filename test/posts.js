import fs from 'fs';
import assert from 'assert';
import postHandler from '../app/postHandler.js';

const testPost = {
	title: 'Test Post'
};

const slugTest = {
	title: '140.5% success; This is awesome!!!!'
}

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

  it('should add `Test Post` and give back the resulted posts', () => {
    loadSamplePosts();

    const resultedPosts = postHandler(samplePosts).add(testPost);
    assert.equal(resultedPosts.length, samplePosts.length + 1);
  });

  it('should create and delete the .md file for the post', () => {
    loadSamplePosts();
    const handler = postHandler(samplePosts);
    let error = false;

    handler.add(testPost);

    try {
      fs.accessSync('./public/posts/test-post.md');
      handler.delete(testPost.title);
    } catch (e) {
      error = e;		
    }

    assert.equal(error, false);
    assert.equal(handler.getPosts().length, samplePosts.length);
  });

  it('should create the correct slug for the slugTest post', () => {
    loadSamplePosts();
    const handler = postHandler(samplePosts);

    handler.add(slugTest);

    const post = handler.getPost('success');
    assert.equal(post.slug, '140.5-percent-success-this-is-awesome');	

		handler.delete(slugTest.title);
  });

})

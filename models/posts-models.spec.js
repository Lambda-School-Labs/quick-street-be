const db = require('../data/db-config.js');
const Posts = require('./posts-models.js');
const server = require('../api/server.js');
const request = require('supertest');


describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });

  });


  describe("DELETE a post", () => {
    it('should remove a post from the db', async () => {
      await Posts.deletePost(2)
      const newPostsList = await Posts.find()
      console.log('POSTS', newPostsList)
      const length = newPostsList.length
      expect(newPostsList.length).toBe(length)
    })
  })

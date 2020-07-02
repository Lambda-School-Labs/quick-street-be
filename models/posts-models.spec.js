const db = require('../data/db-config.js');
const Posts = require('./posts-models.js');
const server = require('../api/server.js');
const request = require('supertest');


describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });

  describe("GET /api/orders", () => {
    it("gets posts", async () => {
      const res = await Posts.find();
      expect(res).toHaveLength(2);
    });
  });
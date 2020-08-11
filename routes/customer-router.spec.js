const db = require('../data/db-config.js');
const CustomerRouter = require('./customer-router');
const server = require('../api/server.js');
const request = require('supertest');

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });


describe("GET /", () => {
it("should return 200 OK", () => {
    request(server)
    .get("/")
    .then((res) => expect(res.status).toBe(404));
    });
});

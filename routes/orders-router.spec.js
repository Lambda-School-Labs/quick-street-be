const db = require('../data/db-config.js');
const Orders = require('./orders-router');
const server = require('../api/server.js');
const request = require('supertest');

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });


describe("GET /", () => {
it("should return 404 restricted address not logged in", () => {
    request(server)
    .get("/orders")
    .then((res) => expect(res.status).toBe(404));
    });
});

// describe("GET /", () => {
//     it("should return 404 restricted address not logged in", () => {
//         request(server)
//         .get("/orders/1")
//         .then((res) => expect(res.status).toBe(404));
//         });
//     });
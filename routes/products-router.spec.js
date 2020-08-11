const db = require('../data/db-config.js');
const ProductsRouter = require('./products-router');
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
        .get("/products")
        .then((res) => expect(res.status).toBe(200));
        });
    });

    describe("GET /", () => {
        it("should return 404 restricted address not logged in", () => {
            request(server)
            .get("/products/1")
            .then((res) => expect(res.status).toBe(404));
            });
        });

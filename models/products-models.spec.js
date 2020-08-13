const db = require('../data/db-config.js');
const Products = require('./products-models.js');
const server = require('../api/server.js');
const request = require('supertest');


describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });

  describe("GET /api/products", () => {
    it("gets products", async () => {
      const res = await Products.getProducts();
      expect(res).toHaveLength(4);
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(2);
      expect(res.name).toBe("catnip");
      expect(res.description).toBe("time to get high kitty");
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(1);
      expect(res.name).toBe("bone");
      expect(res.description).toBe("dog bone treat");
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(3);
      expect(res.name).toBe("mouse");
      expect(res.description).toBe("dinner");
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(4);
      expect(res.name).toBe("test");
      expect(res.description).toBe("test please");
    });
  });

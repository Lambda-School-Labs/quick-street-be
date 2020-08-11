const db = require('../data/db-config.js');
const VendorsRouter = require('./vendor-router');
const server = require('../api/server.js');
const request = require('supertest');



describe("vendor routers", () => {

  describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });


  describe("GET /", () => {
    it("should return 404 restricted address not logged in", () => {
      request(server).get("/vendors")
      .then((res) => expect(res.status).toBe(404));
      });
    });

  describe("GET /", () => {
    it("should return 404 restricted address not logged in", () => {
      request(server)
      .get("/vendors/1")
      .then((res) => expect(res.status).toBe(404));
      });
    });

  describe(" get all", () => {
    it("should get all the vendors, hopefully", async () => {
      let allVendors = await db("vendors")
      console.log("vendors", allVendors)
      expect(allVendors).toHaveLength(3)
      
    })
  })
})


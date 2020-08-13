const db = require('../data/db-config.js');
const Orders = require('./orders-models.js');
const server = require('../api/server.js');
const request = require('supertest');


describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });

describe("GET orders", () => {
  it("should get orders or", async () => {
    let theOrders = await db('orders');
    // console.log("the orders", theOrders)
    expect(theOrders.length).toBe(6)
  })
})

  // describe("GET /api/orders", () => {
  //   it("gets order by id", async () => {
  //     const res = await Orders.getOrders();
  //     expect(res).toHaveLength(3);
  //   });
  // });

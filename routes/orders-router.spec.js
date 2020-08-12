const db = require('../data/db-config.js');
const Orders = require('./orders-router');
const server = require('../api/server.js');
const request = require('supertest');

let token;

beforeAll((done)=>{
  request(server)
  .post("/api/auth/login")
  .send({
    email: "test4@test.com",
    password: "test123"
  })
  .end((err, res) => {
    // console.log("RES", res.body.token)
    token = res.body.token;
    done();
  })
})

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

describe("GET /", () => {
    it("should return 404 restricted address not logged in", () => {
        request(server)
        .get("/orders/1")
        .then((res) => expect(res.status).toBe(404));
        });
    });

describe(" get all orders", () => {
  it("should get all the orders in the db for the vendor signed in", async () => {

    return request(server)
    .get("/api/orders")
    .set("Authorization", `${token}`)
    .then(res => expect(res.status).toBe(200))
    // let theOrders = await Orders.getOrders('orders')
    // let length = theOrders.length
    // expect(theOrders).toHaveLength(count)
  })
  // console.log("ORDERS RES", res)
})


// describe("GET /", () => {
//   it("should return 404 restricted address not logged in", () => {
//     request(server)
//     .get("/vendors/1")
//     .then((res) => expect(res.status).toBe(404));
//     });
//   });
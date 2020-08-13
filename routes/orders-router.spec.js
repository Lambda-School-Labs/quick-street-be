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
    token = res.body.token;
    done();
  })
})

describe("get routers", () =>{

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

describe(" GET all orders", () => {
  it("should get all the orders in the db", async () => {

    request(server)
    .get("/api/orders")
    .set("Authorization", `${token}`)
    .then(res => {
      let theOrders = res.body;
      expect(res.status).toBe(200)
      expect(theOrders).toHaveLength(6)
    })
  })

})


describe(" GET logged in orders", () => {
  it("should get all the orders in the db for the vendor signed in", async () => {

    request(server)
    .get("/api/orders/me")
    .set("Authorization", `${token}`)
    .then(res => {
      let myOrders = res.body;
      // console.log("MY ORDERS", myOrders)
      expect(res.status).toBe(200)
      // expect(myOrders).toHaveLength()
    })
  })

})

})

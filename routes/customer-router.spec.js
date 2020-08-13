const db = require('../data/db-config.js');
const CustomerRouter = require('./customer-router');
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

describe("customer routers", () => {

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});


describe("GET /", () => {
  it("should return 404 restricted address not logged in", () => {
    request(server).get("/customers")
    .then((res) => expect(res.status).toBe(404));
    });
  });

describe("GET /", () => {
  it("should return 404 restricted address not logged in", () => {
    request(server)
    .get("/customers/me")
    .then((res) => expect(res.status).toBe(404));
    });
  });

describe("GET /me", () => {
  it("get logged in customer's info", async () => {
    return request(server)
    .get("/api/customers/me")
    .set('Authorization', `${token}`)
    .then(res => {
      expect(res.status).toBe(200)
    })
  })
})

describe("GET /favorites/me", () => {
  it("should get all of the favorites of the customer", async () => {
    return request(server)
    .get("/api/customers/favorites/me")
    .set("Authorization", `${token}`)
    .then(res => {
      expect(res.status).toBe(200)
    })
  })
})

})
const db = require('../data/db-config.js');
const ProductImagesRouter = require('./productImages-router.js');
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

describe("product images routers", () => {

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });


describe("GET /", () => {
  it("should return 404 restricted address not logged in", () => {
      request(server)
      .get("/images")
      .then((res) => expect(res.status).toBe(404));
      });
  });

describe("GET /", () => {
    it("should return 404 restricted address not logged in", () => {
        request(server)
        .get("/images/1")
        .then((res) => expect(res.status).toBe(404));
        });
    });

describe("GET product images", () => {
  it("get logged in product images", async () => {
    return request(server)
    .get("/api/images")
    .set('Authorization', `${token}`)
    .then(res => {
      expect(res.status).toBe(200)
    })
  })
})
})

const db = require('../data/db-config.js');
const ProductsRouter = require('./products-router');
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

describe("products routers", () => {

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });


describe("GET /", () => {
  it("should return 404 restricted address not logged in", () => {
      request(server)
      .get("/products")
      .then((res) => expect(res.status).toBe(404));
      });
  });

describe("GET /", () => {
    it("should return 404 restricted address not logged in", () => {
        request(server)
        .get("/products/1")
        .then((res) => expect(res.status).toBe(404));
        });
    });

describe("POST a product", () => {
  it("should post a product", async () => {
    await request(server)
    .post("/api/products")
    .set("Authorization", `${token}`)
    .send({
      vendor_id: 1,
      name: "TEST",
      price: 6.3,
    })
    let allProducts = await db('products');
    let allCount = allProducts.length
    expect(allProducts.length).toBe(allCount)
  })
})

describe("DELETE a product", () => {
  it("should hopefully delete a product", async ()  =>{
    await request(server)
    .delete("/api/products")
    .set("Authorization", `${token}`)
    .delete
  })
})

})

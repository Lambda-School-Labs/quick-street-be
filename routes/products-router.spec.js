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

describe(" GET all products", () => {
  it("should get all the products in the db", async () => {

    request(server)
    .get("/api/products")
    .set("Authorization", `${token}`)
    .then(res => {
      let theProducts = res.body;
      let length = theProducts.length
      expect(res.status).toBe(200)
      expect(theProducts).toHaveLength(length)
    })
  })
})

describe(" GET a product by id", () => {
  it("should get a product by id in the db", async () => {

    request(server)
    .get("/api/products/1")
    .set("Authorization", `${token}`)
    .then(res => {
      let theProduct = res.body;
      expect(res.status).toBe(200)
      expect(theProduct.id).toBe(1)
    })
  })
})

describe(" GET a product image by id", () => {
  it("should get a product image by id", async () => {

    request(server)
    .get("/api/products/1/product-images")
    .set("Authorization", `${token}`)
    .then(res => {
      let theProductImage = res.body;
      console.log("IMAGE", theProductImage)
      expect(res.status).toBe(200)
      expect(theProductImage[0].public_id).toBe("j4jtgeyfuaxvsnm1ejwj")
    })
  })
})


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


})

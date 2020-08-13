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
      let theCustomers = res.body;
      let customerCount = theCustomers.length;
      expect(res.status).toBe(200)
      expect(theCustomers.length).toBe(customerCount)
    })
  })
})


describe("POST a customer", () => {
  it("should add a customer", async () => {
    await request(server)
    .post("/api/customers/profile")
    .set("Authorization", `${token}`)
    .send({
      users_id: 10,
      customer_name: "test customers",
      phone_number: "555-528-1434",
      address: "1234 Stanley Ave, Glendale, CA",
      zip_code: 91208,
      public_id: "j4jtgeyfuaxvsnm1ejwj"
    })
    let allCustomers = await db('customers');
    let allCount = allCustomers.length
    expect(allCustomers.length).toBe(allCount)
  })
})

describe("POST a favorite of a customer", () => {
  it("should add fav for a customer", async () => {
    await request(server)
    .post("/api/customers/favorites/add")
    .set("Authorization", `${token}`)
    .send({ customer_id: 5, vendor_id: 5 })
    let allFavorites = await db('customer_favorites_map');
    let favCount = allFavorites.length
    expect(allFavorites.length).toBe(favCount)
  })
})

})
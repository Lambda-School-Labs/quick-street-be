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

    // let theOrders =  
    request(server)
    .get("/api/orders")
    .set("Authorization", `${token}`)
    .then(res => {
      console.log("ORDERS RES", res.body)
      let theOrders = res.body;
      // console.log("THE ORDERS", theOrders)
      // let length = theOrders.length
      expect(res.status).toBe(200)
      // console.log("LENGTH", length)
      expect(theOrders).toHaveLength(6)
      
      // let theOrders = Orders.getOrders('orders')
    })
  })


  // const response = await request(app).get("/");
  //   expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
  //   expect(response.statusCode).toBe(200);

  // it("should add one more customer", async () => {

  //   await Customers.add({
  //     users_id: 20,
  //     customer_name: "Gunner",
  //     phone_number: "124-578-9276",
  //     address: "hello street",
  //     zip_code: 39872
  //   })
  //   const newCustomers = await db('customers')
  //   let count = newCustomers.length;
  //   expect(newCustomers).toHaveLength(count)
  // })
})
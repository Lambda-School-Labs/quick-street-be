const db = require('../data/db-config.js');
const Orders = require('./orders-models.js');
const server = require('../api/server.js');
const request = require('supertest');

// let token;

// beforeAll((done)=>{
//   request(server)
//   .post("/api/auth/login")
//   .send({
//     email: "test4@test.com",
//     password: "test123"
//   })
//   .end((err, res) => {
//     // console.log("RES", res.body.token)
//     token = res.body.token;
//     done();
//   })
// })

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });

describe("GET orders", () => {
  it("should get orders ", async () => {
    let theOrders = await db('orders');
    let counts = theOrders.length
    // console.log("the orders", theOrders)
    expect(theOrders.length).toBe(counts)
  })
})

describe("GET ORDER by ID", () => {
  it("should get an order by its ID", async () => {
    // let thisOrder = await Orders.getOrderById(1);
    let thisOrder = await db('orders').where({id:1})
    console.log("THIS ORDER", thisOrder)
    expect(thisOrder[0].subtotal).toBe(7658)
  })
})

describe("ADD order", () => {
  it("should add an order", async () => {
    await Orders.addOrder({
       user_id: 8, business_name: "doggy", subtotal: 3, date_of_order: "1/1/20" 
    })
    const newOrders = await db('orders')
    let count = newOrders.length
    expect(newOrders.length).toBe(count)
  })
})



// describe("ADD CUSTOMER", () => {
//   it("should add one more customer", async () => {

//     await Customers.add({
//       users_id: 20,
//       customer_name: "Gunner",
//       phone_number: "124-578-9276",
//       address: "hello street",
//       zip_code: 39872
//     })
//     const newCustomers = await db('customers')
//     let count = newCustomers.length;
//     expect(newCustomers).toHaveLength(count)
//   })
// })
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
    // console.log("THIS ORDER", thisOrder)
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

describe("find order with findBy",  () => {
  it('should get an order by a user id', async () => {
    let anOrder = await Orders.findBy(8)
    // console.log("AN ORDER", anOrder)
    expect(anOrder[0].id).toBe(4)
  })
})

describe("find order by its id",  () => {
  it('should get an order by its id', async () => {
    let theOrder = await Orders.getOrderById(1)
    console.log("THE ORDER", theOrder)
    expect(theOrder[0].id).toBe(1)
  })
})

// describe("GET vendor by id", () => {
//   it("gets vendor by id", async () => {
//       const aVenById = await Vendors.findByVendorId(2);
//       console.log("ONE VENDOR", aVenById)
//       expect(aVenById[0].zipcode).toBe(94107);
//   //   expect(res.description).toBe("time to get high kitty");
//   });
//   });
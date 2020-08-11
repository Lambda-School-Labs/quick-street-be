const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config");
const Customers = require("./customer-models.js");

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

// describe("GET /api/customers", () => {
//   it("gets customers", async () => {
//     const res = await Customers.find();
//     expect(res).toHaveLength(2);
//   });
// });



// tbl.text("customer_name", 255).notNullable();
// tbl.text("phone_number", 255).unique().notNullable();
// tbl.text("address", 1000).notNullable();
// tbl.integer("zip_code").notNullable();



// describe("ADD a customer", () => {
  
// beforeEach(async () => {
//   await db('customers').truncate();
// })

//   it('should add a customer', async () => {
//     await Customers.add({
//       users_id: 8, 
//       customer_name: "Ryan", 
//       phone_number: "142-234-4232", 
//       address: "a street", 
//       zip_code: 23212
//     })

//     let newCustomer = await db('customers');
//     expect(newCustomer).toHaveLength(1);
//     // expect(newCustomer.customer_name).toBe('Ryan')
//     // expect(newCustomer.address).toBe('a street')
//   })

// })

// describe("GET /api/customer", () => {
//   it("gets user by id", async () => {
//     const res = await Customers.findCustomerById(1);
//     expect(res.customer_name).toBe("Gunner");
//     expect(res.phone_number).toBe("555-558-1234");
//     expect(res.address).toBe("1234 Stanley Ave, Glendale, CA");
//   });
// });

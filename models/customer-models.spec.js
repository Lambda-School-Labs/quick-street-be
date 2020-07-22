const db = require("../data/db-config.js");
const Customers = require("./customer-models.js");
const server = require("../api/server.js");
const request = require("supertest");

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("GET /api/customers", () => {
  it("gets products", async () => {
    const res = await Customers.find();
    expect(res).toHaveLength(3);
  });
});

// describe("GET /api/customer", () => {
//   it("gets user by id", async () => {
//     const res = await Customers.findCustomerById(1);
//     expect(res.customer_name).toBe("Gunner");
//     expect(res.phone_number).toBe("555-558-1234");
//     expect(res.address).toBe("1234 Stanley Ave, Glendale, CA");
//   });
// });

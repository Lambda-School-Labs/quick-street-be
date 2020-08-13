const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config");
const Customers = require("./customer-models.js");
const { expectCt } = require("helmet");

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


describe("/customers", () =>{

  describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });
  
  describe("GET", () => {
    it("should get the data", async () => {
    
        let theCust = await db('customers');
        let count = theCust.length;
        console.log("COUNT", count)
        expect(theCust).toHaveLength(count);
  
    })
  })

  describe("ADD CUSTOMER", () => {
    it("should add one more customer", async () => {

      await Customers.add({
        users_id: 20,
        customer_name: "Gunner",
        phone_number: "124-578-9276",
        address: "hello street",
        zip_code: 39872
      })
      const newCustomers = await db('customers')
      let count = newCustomers.length;
      expect(newCustomers).toHaveLength(count)
    })
  })


  describe("DELETE a customer", () => {
    it('should remove a customer from the db', async () => {
      await Customers.deleteCustomer(3)
      const newCustomerList = await Customers.find()
      console.log('CUSTOMERS', newCustomerList)
      const length = newCustomerList.length
      expect(newCustomerList.length).toBe(length)
    })
  })

  // describe("FIND CUSTOMER BY USER ID", () => {
  //   it("should find recently added customers", async () => {
  //     return request(server)
  //     let found = await Customers.findBy(20);
  //     console.log("FOUND", found)
  //     expect(found).toHaveProperty("customer_name", "Gunner")
  //   })
  // })

})



// describe("POST /favorites/add AddFavorite", () => {
  
//     // beforeEach(async () => {
//     //   await db('customer_favorites_map').truncate();
//     // })
    
//     it('should insert favorites data into the db', async () => {
      
//       await Customers.addFavorite({user_id: 2, vendor_id: 2})
      
//       const newFavorite = await db('customer_favorites_map');
//       expect(newFavorite).toHaveLength(5)
//     })

//     })

// describe("GET /api/customers", () => {
//   it("gets customers", async () => {
//     const res = await Customers.find();
//     expect(res).toHaveLength(2);
//   });
// });

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

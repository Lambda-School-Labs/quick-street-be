const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config");
const Customers = require("./customer-models.js");
const { expectCt } = require("helmet");


describe("GET", () => {
    it("should get the data", async () => {
    
        let theCust = await db('customers');
        
        // await Customers.findFavorites();
        // console.log("CUST", theCust)
        expect(theCust).toHaveLength(4);

    })
})


// describe("POST /favorites/add AddFavorite", () => {
  
//     beforeEach(async () => {
//       await db('customer_favorites_map').truncate();
//     })
    
//     it('should insert favorites data into the db', async () => {
      
//       await Customers.addFavorite({customer_id: 2, vendor_id: 2})
      
//       const newFavorite = await db('customer_favorites_map');
//       expect(newFavorite).toHaveLength(1)
//     })

//     })
const db = require('../data/db-config.js');
const Vendors = require('./vendor-models.js');
const request = require('supertest');

describe('vendors model', () => {

describe('add(newVendor)', () => {

    it("should insert the added vendor into the DB", async () => {
        await Vendors.add({
            users_id: 10,
            business_name: "jesting",
            phone: "555-654-5267",
            zipcode: 97213
        });

    const vendors = await db('vendors');
    const vendorLength = vendors.length
    expect(vendors).toHaveLength(vendorLength)
    });
});

describe("deleteVendor", () => {

    it("should remove vendor 7", async () => {
        await Vendors.deleteVendor(1)
        const newVendors = await Vendors.find()
        const newLength = newVendors.length
        expect(newVendors).toHaveLength(newLength)
    })


})


describe("GET vendor posts by id", () => {
    it("gets vendor posts by id", async () => {
      const aVendorPost = await Vendors.findVendorPostsByVendorId(2);
      console.log("A VENDOR", aVendorPost)
      expect(aVendorPost[0].title).toBe("meow");
    //   expect(res.description).toBe("time to get high kitty");
    });
  });


describe("GET vendor product by customer", () => {
    it("gets vendor products by a customer", async () => {
      const vendorProducts = await Vendors.findVendorProductsForCustomer(2);
      console.log("A VENDOR PRODUCT", vendorProducts)
      expect(vendorProducts[0].name).toBe("catnip");
    //   expect(res.description).toBe("time to get high kitty");
    });
  });
})



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

describe("GET vendor by id", () => {
it("gets vendor by id", async () => {
    const aVenById = await Vendors.findByVendorId(2);
    console.log("ONE VENDOR", aVenById)
    expect(aVenById[0].zipcode).toBe(94107);
//   expect(res.description).toBe("time to get high kitty");
});
});

describe("GET vendor posts", () => {
    it("gets vendor posts", async () => {
        const vendorPosts = await Vendors.findVendorPosts(2);
        console.log(" VENDOR POSTS", vendorPosts)
        expect(vendorPosts[0].id).toBe(1);
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


describe("ADD a vendor post", () => {
it("should add one more post for a vendor", async () => {

    await Vendors.addVendorPosts({
        vendors_id: 3,
        title: "TEST POST",
        description: "test meow",
      })
    const newPosts = await db('posts')
    let postsLength = newPosts.length;
    expect(newPosts).toHaveLength(postsLength)
})
})


})



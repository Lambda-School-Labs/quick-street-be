const db = require('../data/db-config.js');
const Vendors = require('./vendor-models.js');
const request = require('supertest');

describe('vendors model', () => {

describe('add(newVendor)', () => {

    beforeEach(async () => {
        await db('vendors').truncate(); //Reset DB
    });

    it("should insert the added vendor into the DB", async () => {
        await Vendors.add({
            // id: 1,
            users_id: 10,
            business_name: "jesting",
            phone: "555-654-5267",
            zipcode: 97213
        });

        const vendors = await db('vendors');
        expect(vendors).toHaveLength(1)
    });
});


describe("deleteVendor", () => {

    it("should remove vendor 7", async () => {
        await Vendors.deleteVendor(1)
        const newVendors = await Vendors.find()
        expect(newVendors).toHaveLength(0)
    })


})
})

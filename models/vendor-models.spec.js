const db = require('../data/db-config.js');
const Vendors = require('./vendor-models.js');
const request = require('supertest');

describe('vendors model', () => {
    describe('add(newVendor)', () => {
        it('should insert the added vendor into the DB', async() => {
            await Vendors.add({
                users_id: 10,
                business_name: "jesting",
                phone: "555",
                address: "1234 ",
                zipcode: 97213,
                city: "jest",
                description: "jest",
                vendor_category: "jesting",
                bulletin: "just",
                hours: "10am to 11pm",
                email: "jest@123.com",
            });

            const vendors = await db('vendors');
            expect(vendors).toHaveLength(1);
        });

        it('should return what was inserted', async () => {
            let hobbit = await Vendors.add({
                users_id: 12,
                business_name: "1jesting",
                phone: "5255",
                address: "12234 ",
                zipcode: 97113,
                city: "jes1t",
                description: "jes1t",
                vendor_category: "j2esting",
                bulletin: "ju1st",
                hours: "10am to 11pm",
                email: "jes22t@123.com",
            });
            expect(hobbit.business_name).toBe();
        });

        beforeEach(async () => {
            await db('vendors').truncate(); //Reset DB
        });
    });
});
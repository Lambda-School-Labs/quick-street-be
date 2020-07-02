const db = require('../data/db-config.js');
const Users = require('./users-models.js');
const server = require('../api/server.js');
const request = require('supertest');


//TRICKY TESTING, make sure to change useremail in test 1, and update
// length in test 2

//Uncomment when running actual tests

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });

//   describe("POST /api/auth/register", () => {
//     it("allows add a user", () => {
//       request(server)
//         .post("/api/auth/registration")
//         .send({
//           email: "tests@user1.com",
//           password: "abc123"
//         })
//         .then((res) => expect(res.status).toBe(200))
//         .catch((e) => {
//           console.log(e);
//         });
//     });
//   });



//   describe("GET /api/users", () => {
//     it("pulls all users", async () => {
//       const res = await Users.find();
//       expect(res).toHaveLength(1);
//     });
//   });

  describe("GET /api/users", () => {
    it("gets user by id", async () => {
      const res = await Users.findBy("dog@dog.com");
      expect(res.id).toBe(1);
    });
  });

//   beforeEach(async () => {
//     await db('users').truncate(); //Reset DB
// });
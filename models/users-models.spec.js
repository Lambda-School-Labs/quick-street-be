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

describe("ADD user", () => {
  it("should add one more user", async () => {

    await Users.addUser({
      email: "hilsdfs@snake.com",
      password: "testpass",
      isVendor: 1,
      isAdmin: 0,
    })
    const newUsers = await db('users')
    let userCount = newUsers.length;
    expect(newUsers).toHaveLength(userCount)
  })
})

describe("FIND users", () => {
  it("should find all users", async () => {
    const allUsers = await Users.find();
      const length = allUsers.length
      expect(allUsers).toHaveLength(length);
  })
})

describe("DELETE a user", () => {
  it('should remove a user from the db', async () => {
    await Users.deleteUser(6)
    const newUserList = await Users.find()
    // console.log('SNACKS', newProductsList)
    const length = newUserList.length
    expect(newUserList.length).toBe(length)
  })
})

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
//         });
//     });
//   });



//   describe("GET /api/users", () => {
//     it("pulls all users", async () => {
//       const res = await Users.find();
//       expect(res).toHaveLength(1);
//     });
//   });

  // describe("GET /api/users", () => {
  //   it("gets user by id", async () => {
  //     const res = await Users.findBy("dog@dog.com");
  //     expect(res.id).toBe(1);
  //     // expect(res).toBeDefined();
  //     // expect(res).toBeTruthy();
  //   });

  //   it("Defined id", async () => {
  //     const res = await Users.findBy("dog@dog.com");
  //     expect(res).toBeDefined();
  //     // expect(res).toBeTruthy();
  //   });

  //   it("Truthiness", async () => {
  //     const res = await Users.findBy("dog@dog.com");
  //     expect(res).toBeTruthy();
  //   });
  // });

//   beforeEach(async () => {
//     await db('users').truncate(); //Reset DB
// });


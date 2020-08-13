const db = require("../data/db-config.js");
const UsersRouter = require("./users-router");
const server = require("../api/server.js");
const request = require("supertest");

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

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe(" get all users", () => {
  it("should get all the users", async () => {
  return request(server)
    .get("/api/users")
    .set("Authorization", `${token}`)
    .then(res => {
      // let theUsers = res.body;
      expect(res.status).toBe(404)
      // expect(theUsers.length).toBe(2)
    })
  })

})


// describe("GET /me", () => {
//   it("get logged in customer's info", async () => {
//     return request(server)
//     .get("/api/customers/me")
//     .set('Authorization', `${token}`)
//     .then(res => {
//       expect(res.status).toBe(200)
//     })
//   })
// })
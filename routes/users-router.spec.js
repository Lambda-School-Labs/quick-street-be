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
  it("should get all the posts in the db for the vendor signed in", async () => {

    request(server)
    .get("/api/users")
    .set("Authorization", `${token}`)
    .then(res => {
      // console.log("USERS RES", res.body)
      let theUsers = res.body;
      // console.log("THE ORDERS", theOrders)
      // let length = theOrders.length
      expect(res.status).toBe(200)
      // console.log("LENGTH", length)
      expect(thePosts).toHaveLength(2)
      
      // let theOrders = Orders.getOrders('orders')
    })
  })

})
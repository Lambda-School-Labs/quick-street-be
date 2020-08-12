const db = require('../data/db-config.js');
const AuthRouter = require('./auth-router.js');
const server = require('../api/server.js');
const request = require('supertest');


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


describe("GET /", () => {
it("should return 200 OK", () => {
    request(server)
    .get("/")
    .then((res) => expect(res.status).toBe(404));
    });
});

describe("get favorites /favorites", () => {
  it("should get favorites at auth point", async () =>{
    return request(server)
    .get("/api/auth/favorites")
    .set("Authorization", `${token}`)
    .then(res => {
      console.log("AUTH RES", res)
      expect(res.status).toBe(200)
    })
  })
})
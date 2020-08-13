const db = require('../data/db-config.js');
const PostsRouter = require('./posts-router.js');
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


describe("post routers", () => {


describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });


describe("GET /", () => {
  it("should return 404 restricted address not logged in", () => {
      request(server)
      .get("/posts")
      .then((res) => expect(res.status).toBe(404));
      });
  });

describe("GET /", () => {
    it("should return 404 restricted address not logged in", () => {
        request(server)
        .get("/posts/1")
        .then((res) => expect(res.status).toBe(404));
        });
    });

describe(" get all posts", () => {
  it("should get all the posts in the db for the vendor signed in", async () => {

    request(server)
    .get("/api/posts")
    .set("Authorization", `${token}`)
    .then(res => {
      // console.log("POSTS RES", res.body)
      let thePosts = res.body;
      let postCount = thePosts.length;
      expect(res.status).toBe(200)
      expect(thePosts.length).toBe(postCount)
    })
  })

})

describe("POST a post", () => {
  it("should post a post", async () => {
    await request(server)
    .post("/api/posts")
    .set("Authorization", `${token}`)
    .send({
      vendors_id: 3,
      title: "TEST",
      description: "testing a TEST POST",
    })
    let allPosts = await db('posts');
    let allCount = allPosts.length
    expect(allPosts.length).toBe(allCount)
  })
})

})





// describe("ADD CUSTOMER", () => {
//   it("should add one more customer", async () => {

//     await Customers.add({
//       users_id: 20,
//       customer_name: "Gunner",
//       phone_number: "124-578-9276",
//       address: "hello street",
//       zip_code: 39872
//     })
//     const newCustomers = await db('customers')
//     let count = newCustomers.length;
//     expect(newCustomers).toHaveLength(count)
//   })
// })
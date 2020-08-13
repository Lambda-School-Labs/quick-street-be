// const db = require('../data/db-config.js');
// const VendorsRouter = require('./vendor-router');
// const server = require('../api/server.js');
// const request = require('supertest');

// let token;

// beforeAll((done)=>{
//   request(server)
//   .post("/api/auth/login")
//   .send({
//     email: "test4@test.com",
//     password: "test123"
//   })
//   .end((err, res) => {
//     // console.log("RES", res.body.token)
//     token = res.body.token;
//     done();
//   })
// })

// describe("vendor routers", () => {

//   describe("GET /", () => {
//     it("is using right testing environment", () => {
//       expect(process.env.NODE_ENV).toBe("testing");
//     });
//   });


//   describe("GET /", () => {
//     it("should return 404 restricted address not logged in", () => {
//       request(server).get("/vendors")
//       .then((res) => expect(res.status).toBe(404));
//       });
//     });

//   describe("GET /", () => {
//     it("should return 404 restricted address not logged in", () => {
//       request(server)
//       .get("/vendors/1")
//       .then((res) => expect(res.status).toBe(404));
//       });
//     });

//   describe(" /me", () => {
//     it("get logged in vendor's info", async () => {
//       return request(server)
//       .get("/api/vendors/me")
//       .set('Authorization', `${token}`)
//       .then(res => {
//         expect(res.status).toBe(201)
//       })
  
//     })
//   })

//   describe("/me/products", () => {
//     it("should get all of the products of the vendor", async () => {
//       return request(server)
//       .get("/api/vendors/me/products")
//       .set("Authorization", `${token}`)
//       .then(res => {
//         // expect(res.status).toBe(200)
//       })
//     })
//   })
// })



// it('should return 200 ok', function () {
//   return request(server)
//       .post('/api/snacks')
//       .send({ name: 'coffee', count: 3 })
//       .then(response => {
//           console.log('response', response.status)
//           expect(response.status).toBe(201)
//       })
// })

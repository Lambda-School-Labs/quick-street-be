/* eslint-disable no-undef */
const server = require("./server.js");
const request = require("supertest");

// describe('server.js', () => {
//   it('should be set the testing env', () => {
//       expect(process.env.NODE_ENV).toBe('testing');
//     });
//   });

// describe('server.js', () => {
//   it('should be set the testing env', () => {
//       expect(process.env.NODE_ENV).toBe('testing');
//   });

// describe("server", () => {
//test if in testing environment
//   test("in testing environment", () => {
//     expect(process.env.NODE_ENV).toBe("testing");
//   });
//test GET req in api_router working
//   describe("GET /", () => {
//     it("should return 200 OK", () => {
//       request(server)
//         .get("/")
//         .then((res) => expect(res.status).toBe(200));
//     });
//     it("should be json", () => {
//       request(server)
//         .get("/")
//         .then((res) => expect(res.type).toBe("application/json"));
//     });
//     it("should return the right object", () => {
//       request(server)
//         .get("/")
//         .then((res) => expect(res.body).toEqual("api: up"));
//     });
//   });
// });

describe('server.js', () => {
  it('should be set the testing env', () => {
      expect(process.env.NODE_ENV).toBe('testing');
  });

  describe('Get /', () => {
    //return code
    //return type
    //body share / structure
    //Without ASYNC METHOD 1
    it('should return 200 OK', () => {
        return request(server).get('/test')
          .then(res => {
              expect(res.status).toBe(200);
          });
    });

    //ASYNC
    it('should return 200 ok using async / await ', async () => {
        const res = await request(server).get('/test');
        expect(res.status).toBe(200);
    });

  });

});

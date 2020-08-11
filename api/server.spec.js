/* eslint-disable no-undef */
const server = require("./server.js");
const request = require("supertest");


describe("server.js", () => {
  it("should be set the testing env", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });

  describe("Get /", () => {
    it("should return 200 OK", () => {
      return request(server)
        .get("/test")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    //ASYNC
    it("should return 200 ok using async / await ", async () => {
      const res = await request(server).get("/test");
      expect(res.status).toBe(200);
    });
  });
});

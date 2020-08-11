const db = require("../data/db-config.js");
const UsersRouter = require("./users-router");
const server = require("../api/server.js");
const request = require("supertest");

describe("GET /", () => {
  it("is using right testing environment", () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("should return 200", async () => {
    await request(server)
      .get("/")
      .then((res) => expect(res.status).toBe(404));
  });
});

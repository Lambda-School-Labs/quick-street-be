/* eslint-disable no-undef */
const server = require("./server.js");
const request = "supertest";

describe("GET /", () => {
  it('has process.env.DB_ENV as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  if (
    ("returns 200 OK",
    () => {
      return request(server)
        .get("/")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((res) => {
          expect(res.body.api).toBe("Welcome");
        });
    })
  );
});

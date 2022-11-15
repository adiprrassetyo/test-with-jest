const request = require("supertest");
const app = require("./app");

describe("Test example", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      // More logic goes here
  });
  // More things come here
});
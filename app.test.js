const request = require("supertest");
const app = require("./app");

// Get all users
describe("Test example", () => {
  // More things come her
  test("GET /", (done) => {
    // Logic goes here
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      // More logic goes here
      .expect((res) => {
        res.body.data.length === 1;
        res.body.data[0].email === "test@example.com";
      })
      // Even more logic goes here
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // More things come here
});

// Create a user
describe("Test example", () => {
  // Hidden for simplicity
  test("POST /send", (done) => {
    request(app)
      .post("/send")
      .expect("Content-Type", /json/)
       // More logic goes here
      .send({
        email: "francisco@example.com",
      })
      .expect(201)
      // Even more logic goes here
      .expect((res) => {
        res.body.data.length = 2;
        res.body.data[0].email = "test@example.com";
        res.body.data[1].email = "francisco@example.com";
      })
      // Almost done
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.data[1].id;
        return done();
      });
  });
  // More things come here
});

// Update a user
describe("Test example", () => {
  // Hidden for simplicity
  test("PUT /update/:id", (done) => {
    request(app)
      .put(`/update/${elementId}`)
      .expect("Content-Type", /json/)
      // More logic goes here
      .send({
        email: "mendes@example.com",
      })
      .expect(200)
      // Even more logic goes here
      .expect((res) => {
        res.body.data.length = 2;
        res.body.data[0].email = "test@example.com";
        res.body.data[1].id = elementId;
        res.body.data[1].email = "elementId";
      })
      // Almost done
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // More things come here
});

// Delete a user
describe("Test example", () => {
  // Hidden for simplicity
  test("DELETE /destroy/:id", (done) => {
    request(app)
      .delete(`/destroy/${elementId}`)
      .expect("Content-Type", /json/)
      .expect(200)
      // Even more logic goes here
      .expect((res) => {
        res.body.data.length = 1;
        res.body.data[0].email = "test@example.com";
      })
      // Almost done
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // More things come here
});

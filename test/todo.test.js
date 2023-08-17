const app = require("../app");
const request = require("supertest"); //untuk membuat permintaan http dan mengujinya

test("Should be Success from API todo", (done) => {
  request(app)
    .get("/api/v1/todo")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.message).toBe("Success");
      done();
    })
    .catch(done);
});

test("Total value in TodoList", (done) => {
  request(app)
    .get("/api/v1/todo")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.data.length).toBe(5);
      done();
    })
    .catch(done);
});

test("first value in TodoList", (done) => {
  //parameter done untuk callback
  request(app) //meminta request http
    .get("/api/v1/todo") //metode get
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.data[0].title).toBe("Todo 1");
      done(); //menandakan tes sudah selesai
    })
    .catch(done); //jika err akan ditangkap done dan tes selesai
});

test("second value in TodoList", (done) => {
  request(app)
    .get("/api/v1/todo")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.data[1].title).toBe("Todo 2");
      done();
    })
    .catch(done);
});

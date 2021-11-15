const supertest = require("supertest");
const { expect } = require("chai");

const app = require("../app");
const { dropList } = require("../models/list");

before(async () => {
  await dropList();
});
describe("list operations", () => {
  let listId1 = null;
  it("should return 200 and empty array", (done) => {
    supertest(app)
      .get("/list")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.of.length(0);
        return done();
      });
  });
  it("should return 200 and _id in response", (done) => {
    supertest(app)
      .post("/list")
      .send({
        name: "List one",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body._id).to.not.be.null;
        return done();
      });
  });
  it("should return 200 and one list and empty cards", (done) => {
    supertest(app)
      .get("/list")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).to.be.of.length(1);
        expect(res.body[0].cards).to.be.of.length(0);
        listId1 = res.body[0]._id;
        return done();
      });
  });
  it("should return 200 and one list and empty cards", (done) => {
    supertest(app)
      .post(`/list/${listId1}`)
      .send({
        name: "Card one",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body._id).to.not.be.null;
        return done();
      });
  });
});

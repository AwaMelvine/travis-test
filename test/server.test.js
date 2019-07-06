import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import "regenerator-runtime/runtime";
import "core-js/stable";
import app from "../server";

chai.use(chaiHttp);

before(async () => {
  console.log("Before");
});

after(async () => {
  console.log("After");
});

describe("Message", () => {
  describe("GET / - Get message", () => {
    it("should return a json object", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).be.a.json;
          done();
        });
    });
    it("should have Hello in it", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.be.a.json;
          expect(res.body.message).to.equal("Hello");
          done();
        });
    });
  });
});

var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:8000/"
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';

// function check200(err, response, body) {
//   expect(response.statusCode).toBe(200);
//   done();
// }


describe("Express Server", function() {
    it("returns status code 200 for /users/sabrina", function(done) {
      console.log("in /users/sabrina test");
      supertest(app)
        .get('/users/sabrina')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done); // note that we're passing the done as parameter to the expect
    });

    it("returns the correct data for /users/jonathan", function(done) {
      console.log("in /users/jonathan test");
      supertest(app)
        .get('/users/jonathan')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          "name": "jonathan",
          "age": 27,
          "email": "jonathan@gmail.com",
          "image": "http://static1.squarespace.com/static/553a8716e4b0bada3c80ca6b/553a9655e4b03939abece18a/5731fc75f85082142b12b095/1462893710445/mayfourblocknature.jpg",
          "quote": "I don't know what to say"
        }, done);
    });
    // it('returns status 404 when name is not found', function(done) {
    //   console.log("in 404 test");
    //   supertest(app)
    //     .get('/users/junius')
    //     .expect(404)
    //       done();
    //     });
    // });
  });

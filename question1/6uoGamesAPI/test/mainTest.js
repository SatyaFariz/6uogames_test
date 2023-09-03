var request = require("supertest");
var app = require("../app");


describe("Valid Login", function () {

    it("Login with valid account", function (done) {
        
        request(app)
            .post("/login")
            .send({
                email: "test1@6uogames.com",
                password: "password"
            })
            .expect((res) => {
                
                if (!res.body.hasOwnProperty("message"))
                    throw new Error("Expected 'message' key");

                if (!res.body.hasOwnProperty("session"))
                    throw new Error("Expected 'session' key");
            
            })
            .expect(200, done);
    
    });

});

/*
    Implement Your Code
*/
describe("Unauthenticated", function () {

  it("Login with invalid account", function (done) {
      
      request(app)
          .post("/login")
          .send({
              email: "satyafariznur@@gmail.com",
              password: "someincorrectpassword"
          })
          .expect((res) => {
              
              if (!res.body.hasOwnProperty("message"))
                  throw new Error("Expected 'message' key");
          
          })
          .expect(401, done);
  
  });

});

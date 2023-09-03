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

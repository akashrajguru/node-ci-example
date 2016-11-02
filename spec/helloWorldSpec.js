var request = require("request")
var base_url = "http://localhost:3000/"

describe("Hellow World Server", function () {
   describe("GET /", function () {
       it("return status code 200", function (done) {
            request.get(base_url, function (error, responce, body) {
               expect(responce.statusCode).toBe(200);
                done();
            });
       });

       it("return Hello World", function (done) {
           request.get(base_url, function (error, responce, body) {
               expect(body).toBe("Hello World");
               done();
           });
       });
   });
});
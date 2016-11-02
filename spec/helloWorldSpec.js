var request = require("request")
var base_url = "http://localhost:3000/"

/*Test suite*/
describe("Hello World Server", function () {
    /*sub test suite*/
   describe("GET /", function () {
       it("should return status code 200", function (done) {
            request.get(base_url, function (error, response, body) {
               expect(response.statusCode).toBe(200);
                done();
            });
       });

       it("should return Hello World", function (done) {
           request.get(base_url, function (error, response, body) {
               expect(body).toBe("Hello World");
               done();
           });
       });
   });
    /*sub test suite*/
    describe("GET /number/3", function () {
       it("should return status code 200", function () {
            request.get(base_url+'number/3', function (error, response, body) {
                expect(response.statusCode).toBe(200);
            });
       });

        it("should return array with length of 3", function () {
            request.get(base_url+'number/3', function (error, response, body) {
                expect(body.length).toBe(3);
            });
        });

        it("should return array with 3 Hello World", function () {
            request.get(base_url+'number/3', function (error, response, body) {
                expect(body).toEqual(["Hello World","Hello World","Hello World"]);
            });
        });

    });
});
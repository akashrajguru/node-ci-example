var generator = require('./generator.js');
var express   = require('express');

var app = express();

//local function
generateHelloWorlds = function(number) {
    console.log(" number callled :"+number);
    var result = [];

    for(var i = 0; i < number; i++) {
        result.push("Hello World");
        console.log("i "+i);
    }

    console.log("result : "+result);
    return result;

}



app.get("/", function(req, res) {
        res.status(200).send("Hello World");

});

app.get("/number/:num", function(req, res) {
    var number = req.params.num;
    console.log("number : "+number);

    var helloWorldArray = generator.generateHelloWorlds(number);

    res.status(200).send(helloWorldArray);
});

app.listen(3000);
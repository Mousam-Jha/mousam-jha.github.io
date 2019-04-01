'use strict';

var express = require("express");


var app = express();

// Addition

app.get("/add/:num1/:num2", function(request, response) {
    
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    var sum = num1 + num2;
    response.send("Sum is : " + sum);
});

// Subtraction

app.get("/sub/:num1/:num2", function(request, response) {
    
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    var diff = num1 - num2;
    response.send("Differnce is : " + diff);
});

// Multiplication

app.get("/mul/:num1/:num2", function(request, response) {
    
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    var mul = num1 * num2;
    response.send("Product is : " + mul);
});


// Division

app.get("/div/:num1/:num2", function(request, response) {
    
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    var div = num1 / num2;
    response.send("Division is : " + div);
});

app.listen(3000);

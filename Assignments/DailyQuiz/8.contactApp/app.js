'use strict';

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({extended: false}));

var DB = [];

app.get("/", function(request, response) {
    var data = {
        db: DB
    };
    
    response.render("index.hbs", data);
});

app.post("/add", function(request, response) {
    var data = {
      name: request.body.name,
      phone: request.body.phone
    };

    DB.push(data);
    response.redirect("/");
})

app.listen(3000);
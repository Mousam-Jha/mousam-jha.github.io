'use strict';

// Include all the packages/modules we need.
var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");

// Create the app
var app = express();

// App configurations and settings.
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

// Create the DB connection
var DB;

// Create a Mongo client
var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/attainU", {useNewUrlParser: true});
mongoClient.connect(function(error){
    if(error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        DB = mongoClient.db("attainU");
    }
});


// App routes (URLs)
app.get("/", function(request, response) {
    response.render("index.hbs");
});


// App routes for instructors(URLs)

app.get("/instructors", function(request, response) {
    DB.collection("instructors").find({}).toArray(function(error, instructors){
        if(error) {
            console.log("error occured while connecting to instructors collection");
        }

        var data = {
            instructors: instructors
        };
        response.render("instructors.hbs", data);
    });
});


app.get("/instructors/add", function(request, response) {
    response.render("instructors-add.hbs");
});


app.post("/instructors/add", function(request, response) {
    var name = request.body.name;
    var phone = request.body.phone;
    
    var newInstructor = {
        name: name,
        phone: phone
    };

    DB.collection("instructors").insertOne(newInstructor, function(error, result){
        if(error) {
            console.log("error occured while inserting data into the instructors collection");
        }

        response.redirect("/instructors");
    });

});

// App routes for students(URLs)

app.get("/students", function(request, response) {
    DB.collection("students").find({}).toArray(function(error, students){
        if(error) {
            console.log("error occured while connecting to students collection");
        }

        var data = {
            students: students
        };
        response.render("students.hbs", data);
    });
});


app.get("/students/add", function(request, response) {
    response.render("students-add.hbs");
});


app.post("/students/add", function(request, response) {
    var name = request.body.name;
    var phone = request.body.phone;
    var fav_fruit = request.body.fav_fruit;
    var location = location;
    
    var newInstructor = {
        name: name,
        phone: phone,
        fav_fruit: fav_fruit,
        location: location
    };

    DB.collection("students").insertOne(newInstructor, function(error, result){
        if(error) {
            console.log("error occured while inserting data into the students collection");
        }

        response.redirect("/students");
    });

});

app.listen(3000);
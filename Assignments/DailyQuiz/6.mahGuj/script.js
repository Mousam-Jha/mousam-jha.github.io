'use strict';

// One way of doing this program.


// var request = new XMLHttpRequest();
// request.open("get","cities.json");
// request.send();

// request.onreadystatechange = function() {
//     if ( request.readyState == 4 && request.status == 200){
//         var data = JSON.parse (request.responseText);
//         for (var i = 0; i < data.length; i++) {
//             if ( data[i].state == "Maharashtra" || data[i].state == "Gujarat") {
//                 console.log(data[i].state," - ",data[i].name);
//             }
//         }
//     }
// };


// Efficient way 

var citiesOfState = function (cities,state) {
    for (var i = 0; i < cities.length; i++){
        if ( cities[i].state == state) {
            console.log(cities[i].state,cities[i].name)
        }
    }

};

var request = new XMLHttpRequest();
request.open("get","cities.json");
request.send();

request.onreadystatechange = function () {
    if ( request.readyState == 4 && request.status == 200) {
        var data = JSON.parse (request.responseText);


        console.log("Cities of Maharashtra : ")
        citiesOfState(data, "Maharashtra");

        var data = JSON.parse (request.responseText);
        console.log("Cities of Gujarat : ")
        citiesOfState(data, "Gujarat");
}
};

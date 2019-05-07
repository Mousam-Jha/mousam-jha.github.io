'use strict';
/*

*
**
***
****
*****
*****
****
***
**
*

*/
 var star = function(n) {
    for(var i = 1; i <= n; i++) {
        var line = "";
        for (var j = 1; j <= i; j++){
            line = line + '*';
        }
        console.log(line);
    }

     for(var i = n; i >= 1; i--) {
        var line = "";
        for (var j = 1; j <= i; j++){
            line = line + '*';
        }
        console.log(line);
    }
 };

 star(10);
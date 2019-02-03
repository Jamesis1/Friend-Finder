var express = require('express'); // We are importing "Express" to our server 


var app = express(); 



// Getting the /survey 
// listen to a repsonse / request 

app.get('/survey', function thisIsmyOtherFunction(request, repsonse) { 
    repsonse.sendFile(path.join(__dirname, "public/home.html"));

});

app.get('/', function newFunction(request, repsonse) { 
    repsonse.sendFile(path.join(__dirname, "public/survey.html"));
})

app.listen('5000', function thisIsmyFuntion() { 
    console.log('http://localhost:5000')
} )
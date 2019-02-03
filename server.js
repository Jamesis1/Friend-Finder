// We are importing our "plugins/packages" to our node app 
var express = require('express'); // Express (extenal NPM package)
var path = require('path'); // Path (internal)

// This is starting our express server
var app = express(); 


// This is looking for the "/survey" in our domain 
app.get('/survey', function thisIsmyOtherFunction(request, repsonse) { 

    // > Here we are sending the HTML to the user.
    repsonse.sendFile(path.join(__dirname, "/public/survey.html"));
});


// This is looking for the "/" in our domain 
app.get('/', function newFunction(request, repsonse) { 
    
    // > Here we are sending the HTML to the user.
    repsonse.sendFile(path.join(__dirname, "public/home.html"));
})



// This is running the server in the port 5000
app.listen('5000', function thisIsmyFuntion() { 
    console.log(` Server runs awesome! click here ▶️  http://localhost:5000 `)
} )
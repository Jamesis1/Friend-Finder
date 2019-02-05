// We are importing our "plugins/packages" to our node app 
var express = require('express'); // Express (extenal NPM package)
var path = require('path'); // Path (internal)
var bodyParser = require('body-parser');


// This is starting our express server
var app = express(); 
var PORT= process.env.PORT || 5000;
app.use(express.static("public"))


// Middleware for post req - JSON format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var savedData = [

    { 
    name: 'Susan',
    email: 'Susan@gmail.com',
    ans1: '2',
    ans2: '3',
    ans3: '3',
    ans4: '1',
    ans5: '1',
    ans6: '1',
    ans7: '1',
    ans8: '1',
    ans9: '1',
    ans10: '1',
    matchID: 10
    },
    { 
        name: 'Freddy',
        email: 'freddy@gmail.com',
        ans1: '2',
        ans2: '3',
        ans3: '3',
        ans4: '1',
        ans5: '1',
        ans6: '1',
        ans7: '1',
        ans8: '1',
        ans9: '1',
        ans10: '1',
        matchID: 11 
    }
]; 


// This is looking for the "/survey" in our domain 
app.get('/survey', function thisIsmyOtherFunction(request, repsonse) { 

    // > Here we are sending the HTML to the user.
    repsonse.sendFile(path.join(__dirname, "/public/survey.html"));
});


// This is looking for the "/" in our domain 
app.get('/', function newFunction(request, repsonse) { 
    
    // > Here we are sending the HTML to the user.
    repsonse.sendFile(path.join(__dirname, "public/home.html"));
});

app.post('/api/post/', function newPost(request, repsonse) { 
    var eDir = request.body
    var a1 = parseInt(eDir.a1);
    var a2 = parseInt(eDir.a2);
    var a3 = parseInt(eDir.a3);
    var a4 = parseInt(eDir.a4);
    var a5 = parseInt(eDir.a5);
    var a6 = parseInt(eDir.a6);
    var a7 = parseInt(eDir.a7);
    var a8 = parseInt(eDir.a8);
    var a9 = parseInt(eDir.a9);
    var a10 = parseInt(eDir.a10);
    // console.log(a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10);
    var matchIDUser = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10)

    for(var i = 0; i < savedData.length; i++) { 
        if (savedData[i].matchID === matchIDUser) { 
            console.log("We got a match, your match is " + savedData[i].name);
        } else {
            console.log('We are still expanding! ')
        }
    }
    

    // var totalCount = eDir.a1 + eDir.a2 + eDir.a3 + eDir.a4 + eDir.a5 + eDir.a6 + 
    //     eDir.a7 + eDir.a8 + eDir.a9 + eDir.a10; 

        
    // console.log(totalCount);
    var userData =  {
        'name': request.body.name,
        'email': request.body.email,
        'ans1': request.body.a1,
        'ans2': request.body.a2,
        'ans3': request.body.a3,
        'ans4': request.body.a4,
        'ans5': request.body.a5,
        'ans6': request.body.a6,
        'ans7': request.body.a7,
        'ans8': request.body.a8,
        'ans9': request.body.a9,
        'ans10': request.body.a10,
    }
    savedData.push(userData); 
});

app.get('/api/users', function getAllUsers(request, repsonse) { 
    repsonse.send(savedData);
})





// This is running the server in the port 5000
app.listen(PORT, function thisIsmyFuntion() { 
    console.log(` Server runs awesome! click here ▶️  http://localhost:` + PORT)
} )
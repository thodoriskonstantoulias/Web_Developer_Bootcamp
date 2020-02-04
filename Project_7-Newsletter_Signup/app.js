const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

//We need to include the static folders to our server 
app.use(express.static("public"));

//Set up out homepage the signup form
app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    console.log(firstName,lastName,email);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
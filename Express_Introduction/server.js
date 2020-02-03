//Express Framework

const express = require("express");
const app = express();

//Below if we navigate to the home url we will send a response
app.get("/", function(request,response){
    response.send("Hello");
});

//Below if we navigate to the contact url we will send a response
app.get("/contact", function(req,res){
    res.send("Contact Page");
});

//Below if we navigate to the about url we will send a response
app.get("/about", function(req,res){
    res.send("About Page");
});

//Below if we navigate to the hobbies url we will send a response
app.get("/hobbies", function(req,res){
    res.send("Hobbies Page");
});

//Our server must listen to a port
app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
//Express Framework

const express = require("express");
const app = express();

//Below if we navigate to the root url we will send a response
app.get("/", function(request,response){
    response.send("Hello");
});

//Our server must listen to a port
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
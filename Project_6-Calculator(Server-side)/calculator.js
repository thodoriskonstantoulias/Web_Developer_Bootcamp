//Make a calculator with Express.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

//Simple calculator ------------
//Below if we navigate to the home url we will send a response with the associated html file
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
});

//We have to handle the POST request too when the form is submitted 
app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("The result of the calculation is : " + result);
});

//------------------

//BMI Calculator ----------------
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/Math.pow(height,2);

    res.send("The result of the BMI calculation is : " + bmi);
});

//---------------------------

//Our server must listen to a port
app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 

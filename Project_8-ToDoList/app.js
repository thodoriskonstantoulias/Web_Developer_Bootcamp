const express = require("express");
const bodyParser = require("body-parser");
//Require our new custom module
const date = require(__dirname + "/date.js");

const app = express();

//Declare global variables
const items = [];
const workItems = [];

//We will use EJS to embed code to html 
app.set("view engine", "ejs");

//We need to include the static folders to our server 
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}));

//Instead of just sending some text we could write some logic 
//res.write() to send multiple statements 
//or sendFile() to send an html page with whatever we want
//or send a template such as EJS here with res.render();
app.get("/", function(req,res){

    //We call our module here 
    const day = date.getDate();

    res.render("list", {listTitle : day, itemsToAdd : items});
});   

//We check the value of button to see from which page we came from
app.post("/", function(req,res){
    if (req.body.list === "Work"){
        workItems.push(req.body.task); 
        res.redirect("/work");
    } else {
        items.push(req.body.task); 
        res.redirect("/");
    }   
});

app.get("/work", function(req,res){
    res.render("list", {listTitle : "Work Items", itemsToAdd : workItems});
}); 

app.get("/about", function(req,res){
    res.render("about");
}); 

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
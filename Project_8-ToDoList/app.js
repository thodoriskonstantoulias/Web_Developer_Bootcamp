const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Declare global variables
let items = [];

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
    let today = new Date();

    let options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay : day, itemsToAdd : items});
});

app.post("/", function(req,res){
    items.push(req.body.task); 

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//We will use EJS to embed code to html 
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended : true}));

//Instead of just sending some text we could write some logic 
//res.write() to send multiple statements 
//or sendFile() to send an html page with whatever we want
//or send a template such as EJS here with res.render();
app.get("/", function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch(currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break; 
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break; 
        default:
            console.log("Error");      
    }
    res.render("list", {kindOfDay : day});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
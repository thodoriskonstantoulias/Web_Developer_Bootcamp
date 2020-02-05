const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

//Instead of just sending some text we could write some logic 
//res.write() to send multiple statements 
//or sendFile() to send an html page with whatever we want
app.get("/", function(req,res){
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0){
        res.send("It is weekend");
    } else {
        //res.send("It is a working day");
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
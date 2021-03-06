const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/index.html")
// });

//1st post request
//We must make a request to an external server to get the API for crypto values 
//Also to tsansform json data to objects we use JSON.parse method and the reverese is JSON.stringify
// app.post("/", function(req,res){
//      var crypto = req.body.crypto;
//      var fiat = req.body.fiat;
//      var finalString = crypto + fiat;
//      request(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${finalString}`, function(error,response,body){
//          var data = JSON.parse(body);
//          var price = data.last;
//          var currentDate = data.display_timestamp;

//          //If we want to send many commands back we use res.write and then send
//          res.write(`<p>The current date is ${currentDate}</p>`);
//          res.write(`<h1>The price of ${crypto} is ${price} ${fiat}</h1>`);
//          //console.log(price);
//          res.send();
//      });  
// });

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index2.html")
});
//2nd post request. GET data from external server using parameters (with options instead of just the url)
//Converting amounts from crypto to coins
app.post("/", function(req,res){
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;

    var options = {
        url : "https://apiv2.bitcoinaverage.com/convert/global",
        method : "GET",
        qs : {
            from : crypto,
            to : fiat,
            amount : amount 
        }
    };

    request(options, function(error,response,body){
        var data = JSON.parse(body);
        var price = data.price;
        var currentDate = data.time;

        //If we want to send many commands back we use res.write and then send
        res.write(`<p>The current date is ${currentDate}</p>`);
        res.write(`<h1>${amount} ${crypto} is currently worth ${price} ${fiat}</h1>`);
        //console.log(price);
        res.send();
    });  
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
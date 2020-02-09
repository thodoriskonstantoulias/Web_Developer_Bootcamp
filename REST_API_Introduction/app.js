const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//Add mongodb database
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Connect to database
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articlesSchema = {
    title : String,
    content: String
  };
  
const Article = mongoose.model("Article", articlesSchema);


app.listen(3000, function() {
console.log("Server started on port 3000");
});
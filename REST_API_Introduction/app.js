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

//GET API
app.get("/articles", function(req,res){
  Article.find(function(err, foundItems){
    if (err){
      res.send(err)
    } else {
      res.send(foundItems);
    }
  });
});

//POST API
//Test with Postman
app.post("/articles", function(req, res){
    const title = req.body.title;
    const content = req.body.content;

    const article = new Article({
      title : title,
      content: content
    });

    article.save(function(err){
      if (!err){
        res.send("Successfully added new article");
      } else {
        res.send(err);
      }
    });
});

app.listen(3000, function() {
console.log("Server started on port 3000");
});
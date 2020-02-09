const express = require("express");
const bodyParser = require("body-parser");
//Add mongodb database
const mongoose = require("mongoose");
//Require our new custom module
const date = require(__dirname + "/date.js");

const app = express();

//Declare global variables
// const items = [];
// const workItems = [];

//We will use EJS to embed code to html 
app.set("view engine", "ejs");

//We need to include the static folders to our server 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

//Connect to database
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true, useUnifiedTopology: true});

const itemSchema = {
    name : String
};

const Item = mongoose.model("Item", itemSchema);

//Creating an item just for testing
const item1 = new Item({name:"Shopping"});
const item2 = new Item({name:"Gym"});
const defaultItems = [item1,item2];

//Create new schema for our custom elements 
const listSchema = {
    name : String,
    items : [itemSchema]
};

const List = mongoose.model("List", listSchema);

//Insert the above items to db
// Item.insertMany(defaultItems,function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Data inserted!!!");
//     }
// });

//Instead of just sending some text we could write some logic 
//res.write() to send multiple statements 
//or sendFile() to send an html page with whatever we want
//or send a template such as EJS here with res.render();
app.get("/", function(req,res){

    //Get out items from database
    Item.find(function(err,foundItems){
        //Check if the array is empty so to not insert the initial data many times
        if (foundItems.length === 0){
            Item.insertMany(defaultItems,function(err){
            if (err){
                console.log(err);
            } else {
                console.log("Data inserted!!!");
            }
         });
         res.redirect("/");
        } else {
            res.render("list", {listTitle : "Today", itemsToAdd : foundItems});
        }
    });

    //We call our module here 
    //const day = date.getDate();

    // res.render("list", {listTitle : "Today", itemsToAdd : items});
});   

//We check the value of button to see from which page we came from
app.post("/", function(req,res){
    const item = req.body.task;
    //Check the button's value to see where the request is coming from
    const listName = req.body.list;

    //When posted the new entry will be inserted in the database
    const itemToInsert = new Item({name: item});
    
    if (listName === "Today"){
        itemToInsert.save();
        res.redirect("/");
    } else {
        List.findOne({name:listName},function(err,foundList){
            foundList.items.push(itemToInsert);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
    
    // if (req.body.list === "Work"){ 
    //     workItems.push(req.body.task); 
    //     res.redirect("/work");
    // } else {
    //     items.push(req.body.task); 
    //     res.redirect("/");
    // }   
});

app.post("/delete", function(req,res){
    const checkedItemId = req.body.checkbox;
    Item.findByIdAndRemove(checkedItemId,function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Successfully deleted");
            res.redirect("/");
        }
    });
});

//We need to render dynamically what the user enter in the url ex: /work or /home and change the title and leave the list as is
app.get("/:customListName", function(req,res){
    const userParameter = req.params.customListName;
    
    List.findOne({name: userParameter}, function(err,foundList){
        if (!err){
            if(!foundList){
                const list = new List({
                    name: userParameter,
                    items : defaultItems
                });
                list.save();
                res.redirect("/" + userParameter);
            } else {
                res.render("list", {listTitle : foundList.name, itemsToAdd : foundList.items});
            }
        }
    });
}); 

app.get("/about", function(req,res){
    res.render("about");
}); 

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); 
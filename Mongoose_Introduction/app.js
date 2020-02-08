//Lets say we want fruit records for testing
const mongoose = require("mongoose");

//Connect to database
mongoose.connect("mongodb://localhost:27017/fruitDB", {useNewUrlParser: true, useUnifiedTopology: true});

//Create the schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//Create the "table" fruits
const Fruit = mongoose.model("Fruit", fruitSchema);

//Create new document
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty good"
});

//Save to database 
//fruit.save();

//Exercise : Create a new person document
//Create the schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//Create the "table" persons
const Person = mongoose.model("Person", personSchema);

//Create new document
const person = new Person({
    name: "Ted",
    age: 28
});

//Save to database 
//person.save();

//Insert many fruits together
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "Pretty good"
});
const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "Pretty good"
});
const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Pretty good"
});

Fruit.insertMany([kiwi,orange,banana], function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits");
    }
});
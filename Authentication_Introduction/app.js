//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const encrypt = require("mongoose-encryption");
//Better way to encrypt password is through hashing
//const md5 = require("md5");
//Even better way is bcrypt -- salting and hashing
const bcrypt = require("bcrypt");
const saltrounds = 10;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({ 
    email: String,
    password : String
});

//We want to encrypt our password

//Having secret here is a vulnerability - we move it to .env file -- of course in production we delete the following line .We leave it here for now.
//const secret = "Thisisoursecret";

const secret = process.env.SECRET;
//userSchema.plugin(encrypt, {secret : secret, encryptedFields: ['password']});

const User = new mongoose.model("User", userSchema);

//Approach 1 : Saving password as text -- Bad approach
//Approach 2 : Saving password with encryption -- Mongoose encryption
//Approach 3 : Saving password with hashing -- Better encryption
//Approach 4 : Saving password with hashing and salting -- Best encryption

app.get("/", function(req,res){
    res.render("home");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.post("/login", function(req,res){
    const username = req.body.username;
    //const password = md5(req.body.password);
    const password = req.body.password;

    User.findOne({email: username}, function(err, foundUser){
        if (err){
            console.log(err);
        } else {
            if (foundUser){
                bcrypt.compare(password, foundUser.password, function(err, result){
                    if (result){
                        res.render("secrets");
                    }
                });
                // if (foundUser.password === password){
                //     res.render("secrets");
                // }
            }
        }
    });
});

app.get("/register", function(req,res){
    res.render("register");
});

app.post("/register", function(req,res){

    bcrypt.hash(req.body.password,saltrounds,function(err, hash){
        const newUser = new User({
            email : req.body.username,
            password : hash
        });
        newUser.save(function(err){
            if (err){
                console.log(err);
            } else {
                res.render("secrets");
            }
        });
    });

    // const newUser = new User({
    //     email : req.body.username,
    //     password : md5(req.body.password)
    // });
    // newUser.save(function(err){
    //     if (err){
    //         console.log(err);
    //     } else {
    //         res.render("secrets");
    //     }
    // });
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
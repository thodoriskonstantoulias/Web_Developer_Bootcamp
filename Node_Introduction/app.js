//Node
// const fs = require("fs");

//Test a file function
// fs.copyFileSync("file1.txt","file2.txt");

//General note : Run npm init which created package.json, after we installed an external package for testing which added to package.json as a dependency


//Download a module and test --> Superheroes module

var superheroes = require("superheroes");
var mySuperHero = superheroes.random();

console.log(mySuperHero);

//Download a module and test --> Supervillains module

var supervillains = require("supervillains");
var mySuperVillain = supervillains.random();

console.log(mySuperVillain);
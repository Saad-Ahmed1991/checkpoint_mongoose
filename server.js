const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const Person = require("./models/personModel");
const createPerson = require("./config/createPerson");
const createMultiplePeople = require("./config/createMultiplePeople");
const showDB = require("./config/showDB");
const findOnePerson = require("./config/findOnePerson");
const findById = require("./config/findById");
const classcUpdate = require("./config/classicUpdate");
const newUpdate = require("./config/newUpdate");
const removeByID = require("./config/removeByID");
const deletePerson = require("./config/removeMany");
const chainSearch = require("./config/chainSearch");

//database connection

connectDB();

//creating one Person

//createPerson("ahmed", 31, ["pizza", "burger", "pasta"]);

//create Multiple People
/*
createMultiplePeople([
  { name: "ghassen", age: 31, favoriteFoods: ["pizza", "burger", "pasta"] },
  { name: "ali", age: 25, favoriteFoods: ["marshmellow", "coke", "pizza"] },
  {
    name: "alex",
    age: 29,
    favoriteFoods: ["sea food", "chicken", "french fries"],
  },
  { name: "issam", age: 18, favoriteFoods: ["banana", "rice", "pasta"] },
]);
*/

//showing database

//showDB();

//finding one person

//findOnePerson("burger");

//finding By ID

//findById("6395becae8ee0f4a1a7dce70");

//classcUpdate("6395becae8ee0f4a1a7dce70", "couscous");

//newUpdate("ali", 30);

//removeByID("6395becae8ee0f4a1a7dce70");

//deletePerson("alex");

//chainSearch("banana",5);

const port = process.env.PORT;

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server running on port: ${port}!`)
);

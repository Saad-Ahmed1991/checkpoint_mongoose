const Person = require("../models/personModel");

const findOnePerson = (food) => {
  Person.findOne({ favoriteFoods: { $all: [food] } }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
};

module.exports = findOnePerson;

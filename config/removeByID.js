const Person = require("../models/personModel");

const removeByID = (id) => {
  Person.findOneAndRemove({ _id: id }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`document with the ID of ${id} has been removed`);
    }
  });
};

module.exports = removeByID;

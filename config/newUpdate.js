const Person = require("../models/personModel");

const newUpdate = (name, age) => {
  Person.findOneAndUpdate(
    { name: name },
    { age: age },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        console.log(`${name}'s age has been updated to ${age}`);
      }
    }
  );
};

module.exports = newUpdate;

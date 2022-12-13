const Person = require("../models/personModel");

// creating new person

const createPerson = async (name, age, favoriteFoods) => {
  try {
    const person = new Person({
      name,
      age,
      favoriteFoods,
    });
    await person.save();
    console.log("data added successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = createPerson;

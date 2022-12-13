const Person = require("../models/personModel");

//creating multiple Records

const createMultiplePeople = async (arrayOfPeople) => {
  try {
    await Person.create(arrayOfPeople);
    console.log("data added successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = createMultiplePeople;

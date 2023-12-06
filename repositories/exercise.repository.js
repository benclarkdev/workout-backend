const mongoClient = require("../mongo/mongo.client");

const DB_NAME = "exercise";
const COLLECTION_NAME = "exercises";

// create
async function insertOne(exercise){
  return await mongoClient.insertOne(DB_NAME, COLLECTION_NAME, exercise);
}

// read one
async function readOne(argument){
  return await mongoClient.readOne(DB_NAME, COLLECTION_NAME, argument);
}

// read many
async function readMany(argument){
  return await mongoClient.readMany(DB_NAME, COLLECTION_NAME, argument);
}

// update one 
async function updateOne(exercise){
  return await mongoClient.updateOne(DB_NAME, COLLECTION_NAME, exercise);
}

// delete one
async function deleteOne(id){ 
  // Update the first document that matches the filter
  
  const result = await movies.updateOne(filter, updateDoc, options);
}

module.exports = {
  insertOne,
  readOne,
  readMany,
  updateOne,
  deleteOne
};
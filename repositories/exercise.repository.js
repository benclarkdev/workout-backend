const mongoClient = require('../mongo/mongo.client');

const DB_NAME = 'exercise';
const COLLECTION_NAME = 'exercises';

// create
async function insertOne(exercise){
  return await mongoClient.insertOne(DB_NAME, COLLECTION_NAME, exercise);
}

// read many
async function readMany(argument){
  return await mongoClient.readMany(DB_NAME, COLLECTION_NAME, argument);
}

// read many
async function readOne(argument){
  return await mongoClient.readOne(DB_NAME, COLLECTION_NAME, argument);
}

// update one 
async function updateOne(exercise){
  return await mongoClient.updateOne(DB_NAME, COLLECTION_NAME, exercise);
}

module.exports = {
  insertOne,
  readOne,
  readMany,
  updateOne
};
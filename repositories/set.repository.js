const mongoClient = require('../mongo/mongo.client');

const DB_NAME = "exercise";
const COLLECTION_NAME = "sets";

// create
async function insertOne(set){
  const result = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .insertOne(set);
}

// read one
async function readOne(argument){
  
}

// read many
async function readMany(argument){
  return await mongoClient.readMany(DB_NAME, COLLECTION_NAME, argument);
}

module.exports = {
  insertOne,
  readOne,
  readMany
};
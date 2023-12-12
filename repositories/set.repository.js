const mongoClient = require('../mongo/mongo.client');

const DB_NAME = 'exercise';
const COLLECTION_NAME = 'sets';

// create
async function insertOne(set){
  return await mongoClient.insertOne(DB_NAME, COLLECTION_NAME, set);
}

// insert many
async function insertMany(sets){
  return await mongoClient.insertMany(DB_NAME, COLLECTION_NAME, sets);
}

// read many
async function readMany(argument){
  return await mongoClient.readMany(DB_NAME, COLLECTION_NAME, argument);
}

module.exports = {
  insertOne,
  insertMany,
  readMany
};
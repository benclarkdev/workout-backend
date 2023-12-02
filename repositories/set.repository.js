const DB_NAME = "exercise";
const COLLECTION_NAME = "sets";

// create
async function insertOne(client, set){
  const result = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .insertOne(set);
}

// read one
async function readOne(client, argument){
  const result = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .findOne(argument);
}

// read many
async function readMany(client, argument){
  const cursor = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .find(argument);

  const results = await cursor.toArray();
}

// update one 
async function updateOne(client, set){}

// delete one
async function deleteOne(client, id){}

module.exports = {
  insertOne,
  readOne,
  readMany,
  updateOne,
  deleteOne
};
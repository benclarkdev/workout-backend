const DB_NAME = "exercise";
const COLLECTION_NAME = "exercises";

// create
async function insertOne(exercise){
  const result = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .insertOne(exercise);
}

// read one
async function readOne(argument){
  const result = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .findOne(argument);
}

// read many
async function readMany(argument){
  const cursor = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .find(argument);

  const results = await cursor.toArray();
}

// read all
async function readAll(client){
  const cursor = await client.db(DB_NAME)
    .collection(COLLECTION_NAME)
    .find(argument);

  const results = await cursor.toArray();
}

// update one 
async function updateOne(exercise){
  // Create a filter for movies with the title "Random Harvest"
  const filter = { title: "Random Harvest" };
  /* Set the upsert option to insert a document if no documents match
  the filter */
  const options = { upsert: true };
  // Specify the update to set a value for the plot field
  const updateDoc = {
    $set: {
      plot: `A harvest of random numbers, such as: ${Math.random()}`
    },
  };

  // Update the first document that matches the filter
  const result = await movies.updateOne(filter, updateDoc, options);
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
  readAll,
  updateOne,
  deleteOne
};
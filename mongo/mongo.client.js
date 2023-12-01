const { MongoClient } = require('mongodb');

async function runMongoClient() {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    await listDatabases(client);

    /*
    const db = client.db('exercises');
    const collection = db.collection('sets');

    // Find the first document in the collection
    const data = await collection.find();
    console.log(data);
    */
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = {
  listDatabases,
  runMongoClient
}
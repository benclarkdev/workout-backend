const { MongoClient } = require('mongodb');

async function readMany(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find(argument).toArray();
  
    return data;
  } finally {
    await client.close();
  }
}

module.exports = {
  readMany
};
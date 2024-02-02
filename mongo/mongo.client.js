const { MongoClient } = require('mongodb');

async function aggregate(dbName, collectionName, argumentArray) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.aggregate(argumentArray).toArray();

    return data;
  } finally {
    await client.close();
  }
}

async function deleteOne(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.deleteOne(argument).toArray();
  
    return data;
  } finally {
    await client.close();
  }
}

async function insertOne(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.insertOne(argument);
  
    return true;
  } finally {
    await client.close();
  }
}

async function insertMany(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.insertMany(argument);
  
    return true;
  } finally {
    await client.close();
  }
}

async function readOne(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.findOne(argument).toArray();
  
    return data;
  } finally {
    await client.close();
  }
}

async function readMany(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find(argument).toArray();
  
    return data;
  } finally {
    await client.close();
  }
}

async function updateOne(dbName, collectionName, argument) {
  const uri = "mongodb+srv://benclarkdev:VhnMQf5SHh0gfluM@vasa-cluster.cwtdawl.mongodb.net/";
  const client = new MongoClient(uri);
  
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.updateOne(argument).toArray();
  
    return data;
  } finally {
    await client.close();
  }
}

module.exports = {
  aggregate,
  deleteOne,
  insertOne,
  insertMany,
  readOne,
  readMany,
  updateOne
};
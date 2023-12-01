const mongoClient = require('./mongo/mongo.client');

const express = require('express');
const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoClient.runMongoClient().catch(console.error);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// get exercises
app.get('/exercises', (req, res) => {
  res.send();
});

// add exercises
app.post('/exercise', (req, res) => {

});

// get exercise history
app.get('/history', (req, res) => {
  
});
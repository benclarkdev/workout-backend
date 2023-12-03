// external dependencies
const express = require('express');

const exerciseController = require('./controllers/exercise.controller');
const historyController = require('./controllers/history.controller');
const setController = require('./controllers/set.controller');

const mongoClient = require('./mongo/mongo.client');

const port = 3000;
const app = express();

/* BEGIN CONFIGURATION */
app.use(express.static(__dirname + '/public'));
/* END CONFIGURATION */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res, next) => {
  res.send("<p>Workout backend is running on localhost:3000</p>");
});

/* BEGIN EXERCISE ROUTES */
// action - add exercise
app.post('/exercise/create', exerciseController.actionAdd);

// action - update exercise
app.post('/exercise', exerciseController.actionUpdate);

// action - delete exercise 
app.post('/exercise/delete/:id', exerciseController.actionDelete);

// action - read exercise
app.post('/exercise/:id', exerciseController.actionRead);

// action - read many exercises
app.post('/exercise/delete/:id', exerciseController.actionReadMany);
/* END EXERCISE ROUTES */

/* BEGIN HISTORY ROUTES */
app.get('/history/:id', exerciseController.getExerciseHistory);
/* END HISTORY ROUTES */

/* BEGIN SET ROUTES */
// action - add set
app.post('/set/create', setController.actionAdd);

// action - read by date
app.get('/sets/byDate', setController.actionReadByDate);
/* END SET ROUTES */
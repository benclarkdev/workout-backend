// external dependencies
const express = require('express');
const ejs = require('ejs');

const exerciseController = require('./controllers/exercise.controller');
const setController = require('./controllers/set.controller');
const workoutController = require('./controllers/workout.controller');

const mongoClient = require('./mongo/mongo.client');

const port = 3000;
const app = express();

/* BEGIN CONFIGURATION */
app.set('view engine', 'ejs');
/* END CONFIGURATION */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res, next) => {
  res.render('./dashboard');
});

/* BEGIN EXERCISE ROUTES */
// exercise index
app.get('/exercises', exerciseController.pageIndex);

// page - add exercise
app.get('/exercise', exerciseController.pageAdd);

// page - update exercise
app.get('/exercise/update/:id', exerciseController.pageUpdate);

// page - delete exercise
app.get('/exercise/delete/:id', exerciseController.pageDelete);

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

/* BEGIN SET ROUTES */
// action - add set
app.post('/set/create', setController.actionAdd);

// action - read by date
app.post('/set/:id', setController.actionReadByDate);
/* END SET ROUTES */

/* BEGIN WORKOUT ROUTES */
// page - today
app.get('/workout/today', workoutController.pageCurrent);

// page - past
app.get('/workout/past', workoutController.pagePast);
/* END WORKOUT ROUTES */
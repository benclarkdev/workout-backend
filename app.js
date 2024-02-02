// EXTERNAL DEPENDENCIES
const express = require('express');
const cors = require('cors');

// INTERNAL DEPENDENCIES
const exerciseController = require('./controllers/exercise.controller');
const setController = require('./controllers/set.controller');
const bestController = require('./controllers/best.controller');
const historyController = require('./controllers/history.controller');

// CONFIGURATION
const app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));

const port = 3000;

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res, next) => {
  res.send("<p>Workout backend is running on localhost:3000</p>");
});

/* BEGIN EXERCISE ROUTES */
// action - add exercise
app.post('/exercise/create', exerciseController.actionAdd);

// action - update exercise
app.put('/exercise/:id', exerciseController.actionUpdate);

// action - delete exercise 
app.delete('/exercise/delete/:id', exerciseController.actionDelete);

// action - read exercise
app.get('/exercise/:id', exerciseController.actionReadOne);

// action - read exercise
app.get('/exercises', exerciseController.actionGetAll);
/* END EXERCISE ROUTES */

/* BEGIN SET ROUTES */
// action - add set
app.post('/set/create', setController.actionAdd);

// action - read all
app.get('/sets', setController.actionGetAll);

// action - read by date
app.get('/sets/byDate', setController.actionReadByDate);
/* END SET ROUTES */

// BEGIN BEST ROUTES
app.get('/best/getBests/:id', bestController.getBests);
// END BEST ROUTES

// BEGIN HISTORY ROUTES
app.post('/history/exercise', historyController.getExerciseHistory);

app.post('/history/oneRepMax', historyController.getOneRepMaxHistory);
// END HISTORY ROUTES
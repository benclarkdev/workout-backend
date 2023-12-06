// external dependencies
const express = require('express');

// internal dependencies
const exerciseController = require('./controllers/exercise.controller');
const setController = require('./controllers/set.controller');
const statsController = require('./controllers/stats.controller');

// configuration
const port = 3000;
const app = express();
app.use(express.static(__dirname + '/public'));
/* END CONFIGURATION */

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  
  let setResult = await setController.actionReadByExercise({exercise_id: 1}, null, (err) => console.error('error', err));
  console.log(setResult);

  let exerciseResult = await exerciseController.actionRead({exercise_id: 1}, null, (err) => console.error('error', err));
  console.log(exerciseResult);
});

app.get('/', (req, res, next) => {
  res.send("<p>Workout backend is running on localhost:3000</p>");
});

/* BEGIN EXERCISE ROUTES */
// action - add exercise
app.post('/exercise/create', exerciseController.actionAdd);

// action - update exercise
app.post('/exercise/:id', exerciseController.actionUpdate);

// action - delete exercise 
app.post('/exercise/delete/:id', exerciseController.actionDelete);

// action - read exercise
app.post('/exercise/:id', exerciseController.actionRead);

// action - read many exercises
app.post('/exercises', exerciseController.actionReadMany);
/* END EXERCISE ROUTES */

/* BEGIN SET ROUTES */
// action - add set
app.post('/set/create', setController.actionAdd);

// action - read by date
app.get('/sets/byDate', setController.actionReadByDate);
/* END SET ROUTES */

/* BEGIN STATS ROUTES */
app.get('/stats/historyForExercise/:id', statsController.getExerciseHistory);
/* END STATS ROUTES */
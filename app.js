// EXTERNAL DEPENDENCIES
const express = require('express');
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// INTERNAL DEPENDENCIES
const exerciseController = require('./controllers/exercise.controller');
const setController = require('./controllers/set.controller');
const statsController = require('./controllers/stats.controller');

// CONFIGURATION
const port = 3000;
const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res, next) => {
  res.send("<p>Workout backend is running on localhost:3000</p>");
});

/* BEGIN EXERCISE ROUTES */
// action - add exercise
app.post('/exercise/create', cors(corsOptions), exerciseController.actionAdd);

// action - update exercise
app.put('/exercise/:id', cors(corsOptions), exerciseController.actionUpdate);

// action - delete exercise 
app.delete('/exercise/delete/:id', cors(corsOptions), exerciseController.actionDelete);

// action - read exercise
app.get('/exercise/:id', cors(corsOptions), exerciseController.actionReadOne);

// action - read exercise
app.get('/exercises', cors(corsOptions), exerciseController.actionGetAll);
/* END EXERCISE ROUTES */

/* BEGIN SET ROUTES */
// action - add set
app.post('/set/create', cors(corsOptions), setController.actionAdd);

// action - read by date
app.get('/sets/byDate', cors(corsOptions), setController.actionReadByDate);
/* END SET ROUTES */

// BEGIN STATS ROUTES
app.get('/stats/historyForExercise/:id', cors(corsOptions), statsController.getExerciseHistory);
// END STATS ROUTES
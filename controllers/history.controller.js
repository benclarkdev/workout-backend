const historyRepository = require('../repositories/history.repository');

const getExerciseHistory = async (req, res, next) => {
  console.log('requesting history', req);

  let person = "Ben";
  let exercise = "Deadlift";

  let history = await historyRepository.getExerciseHistory(person, exercise);

  res.json(history);
};

const getOneRepMaxHistory = async (req, res, next) => {
  console.log('requesting oneRepMax', req);

  let person = "Ben";
  let exercise = "Deadlift";

  let history = await historyRepository.getOneRepMaxHistory(person, exercise);

  res.json(history);
};

module.exports = {
  getExerciseHistory,
  getOneRepMaxHistory
};
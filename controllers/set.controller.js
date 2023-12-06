const setRepository = require('../repositories/set.repository');

const actionAdd = async (req,res,next) => {
  console.log('add', req.body);
};

const actionReadByDate = async (req,res,next) => {
  const date = new Date(req.query.date);
  return setRepository.readMany({date: date});
};

const actionReadByExercise = async (req,res,next) => {
  const exercise_id = req.exercise_id;
  return await setRepository.readMany({exercise_id: exercise_id});
};

module.exports = {
  actionAdd,
  actionReadByDate,
  actionReadByExercise
};
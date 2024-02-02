const setRepository = require('../repositories/set.repository');
const _ = require('underscore');

const actionAdd = async (req,res,next) => {
  try {
    
    return await setRepository.insertOne(req);
  } catch (error) {
    console.error(error.message);
  }
};

const actionAddMany = async (req,res,next) => {
  try {
    return await setRepository.insertMany(req);
  } catch (error) {
    console.error(error.message);
  }
};

const actionGetAll = async (req,res,next) => {
  try {
    const sets = await setRepository.readMany({"person": "Ben"});
    // const sets = await setRepository.readMany({"person": "Craig"});
    const groupedByExercise = _.sortBy(_.sortBy(sets, 'date'), 'exercise');
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ sets: groupedByExercise }));
  } catch (error) {
    console.error(error.message);
  }
};

const actionReadByDate = async (req,res,next) => {
  try {
    const date = new Date(req.query.date);
    return await setRepository.readMany({date: date});
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  actionAdd,
  actionAddMany,
  actionGetAll,
  actionReadByDate,
};
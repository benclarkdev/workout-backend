const exerciseRepository = require('../repositories/exercise.repository');
const _ = require('underscore');

const actionAdd = async (req,res,next) => {
  try {
    return await exerciseRepository.insertOne(req);
  } catch (error) {
    console.error(error.message);
  }
};

const actionUpdate = async (req,res,next) => {
  try {
    return await exerciseRepository.actionUpdate();
  } catch (error) {
    console.error(error.message);
  }
};

const actionDelete = async (req,res,next) => {
  try {
    return await exerciseRepository.actionDelete();
  } catch (error) {
    console.error(error.message);
  }
};

const actionReadOne = async (req,res,next) => {
  try {
    return await exerciseRepository.readOne(req);
  } catch (error) {
    console.error(error.message);
  }
};

const actionGetAll = async (req,res,next) => {
  try {
    const exercises = await exerciseRepository.readMany();
    const sortedExercises = _.sortBy(exercises, 'name');
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({exercises: sortedExercises}));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  actionAdd,
  actionUpdate,
  actionDelete,
  actionReadOne,
  actionGetAll
};
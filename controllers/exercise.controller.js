const exerciseRepository = require('../repositories/exercise.repository');

const actionAdd = async (req,res,next) => {
  exerciseRepository.actionAdd();
};

const actionUpdate = async (req,res,next) => {
  exerciseRepository.actionUpdate();
};

const actionDelete = async (req,res,next) => {
  exerciseRepository.actionDelete();
};

const actionRead = async (req,res,next) => {
  return await exerciseRepository.readMany(req);
};

const actionReadMany = async (req,res,next) => {
  exerciseRepository.actionReadMany();
};

module.exports = {
  actionAdd,
  actionUpdate,
  actionDelete,
  actionRead,
  actionReadMany
};
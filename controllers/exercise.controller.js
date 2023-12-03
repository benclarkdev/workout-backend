const asyncHandler = require('express-async-handler');

const exerciseRepository = require('../repositories/exercise.repository');

const actionAdd = asyncHandler(async (req,res,next) => {
  exerciseRepository.actionAdd();
});

const actionUpdate = asyncHandler(async (req,res,next) => {
  exerciseRepository.actionUpdate();
});

const actionDelete = asyncHandler(async (req,res,next) => {
  exerciseRepository.actionDelete();
});

const actionRead = asyncHandler(async (req,res,next) => {
  exerciseRepository.actionRead();
});

const actionReadMany = asyncHandler(async (req,res,next) => {
  exerciseRepository.actionReadMany();
});

module.exports = {
  pageIndex,
  pageAdd,
  pageUpdate,
  pageDelete,
  actionAdd,
  actionUpdate,
  actionDelete,
  actionRead,
  actionReadMany
};
const asyncHandler = require('express-async-handler');

const exerciseRepository = require('../repositories/exercise.repository');

const pageIndex = asyncHandler(async (req,res,next) => {
  let allExercises = exerciseRepository.readAll();
  res.render('exercises/index');
});

const pageAdd = asyncHandler(async (req,res,next) => {
  res.render('exercises/add');
});

const pageUpdate = asyncHandler(async (req,res,next) => {
  res.render('exercises/update');
});

const pageDelete = asyncHandler(async (req,res,next) => {
  res.render('exercises/delete');
});

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
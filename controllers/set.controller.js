const asyncHandler = require('express-async-handler');

const setRepository = require('../repositories/set.repository');

const actionAdd = asyncHandler(async (req,res,next) => {
  return setRepository.insertOne();
});

const actionReadByDate = asyncHandler(async (req,res,next) => {
  const date = new Date(req.query.date);
  return setRepository.readMany();
});

module.exports = {
  actionAdd,
  actionReadByDate
};
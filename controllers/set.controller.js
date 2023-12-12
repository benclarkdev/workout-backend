const setRepository = require('../repositories/set.repository');

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
  actionReadByDate
};
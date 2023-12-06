const setRepository = require('../repositories/set.repository');

const getExerciseHistory = async (req, res, next) => { 
  // find all sets of a given exercise by a given person, sort chronologically

  return await setRepository.readMany(mongoClient, );
};

module.exports = {
  getExerciseHistory
};
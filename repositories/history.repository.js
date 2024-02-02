const mongoClient = require('../mongo/mongo.client');

const DB_NAME = 'exercise';
const COLLECTION_NAME = 'sets';

async function getExerciseHistory(person, exercise){
  const argument = {
    "person": {"$eq": person },
    "exercise": {"$eq": exercise }
  };

  return await mongoClient.readMany(DB_NAME, COLLECTION_NAME, argument);
}

async function getOneRepMaxHistory(exercise){
  const argument = [
    {
      $match: {
        "exercise": exercise
      },
    },
    {
      $group: {
        _id: {
          person: "$person",
          exercise: "$exercise",
          date: {
            $dateToString: { format: "%Y-%m-%d", date: "$date" }
          }
        },
        maxWeight: { $max: "$weight" }
      },
    },
    {
      $project: {
        _id: 0,
        person: "$_id.person",
        exercise: "$_id.exercise",
        date: "$_id.date",
        maxWeight: "$maxWeight"
      },
    },
    {
      $sort: {
        date: -1
      }
    }
  ];

  return await mongoClient.aggregate(DB_NAME, COLLECTION_NAME, argument);
}

module.exports = {
  getExerciseHistory,
  getOneRepMaxHistory
};
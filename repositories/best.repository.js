const mongoClient = require('../mongo/mongo.client');
const setRepository = require('../repositories/set.repository');

const DB_NAME = 'exercise';
const COLLECTION_NAME = 'best';

async function getBests(person){
  // try to find the last existing calculation
  const argument = { person: person };
  const existingRecord = await mongoClient.readOne(DB_NAME, COLLECTION_NAME, argument);

  // if one exists
  if (existingRecord) {
    // check its age. create again if it is too old.
    const isOld = recordIsOld(existingRecord);

    if (isOld) {
      const lastRecordDate = existingRecord.date;
      return await createNewRecord(person, lastExistingRecord);
    } else {
      return existingRecord;
    }
  } else {
    return await createNewRecord(person);
  }
}

async function createNewRecord(person, lastExistingRecord){
  if (lastExistingRecord){
    // get sets grouped by exercise, since last record
    let sets = setRepository.readMany();
    
    // compare against last existing record
    const newRecord = createRecordFromSets(sets, lastExistingRecord);

    // insert
    return await mongoClient.insertOne(DB_NAME, COLLECTION_NAME, newRecord);
  } else {
    // get sets grouped by exercise
    let sets = setRepository.readMany();

    // insert record for each exercise/rep maximum
    const newRecord = createRecordFromSets(sets);

    // insert record
    return await mongoClient.insertOne(DB_NAME, COLLECTION_NAME, newRecord);
  }
}

function recordIsOld(existingRecord){
  const today = new Date();
  return today >= existingRecord.date;
}

module.exports = {
  getBests
};
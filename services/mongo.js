require("dotenv").config();
const { MongoClient } = require("mongodb");
const debug = require("debug")("trello-backend:mongodb");
const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?`;
const client = new MongoClient(uri);
const getClient = async () => {
  try {
    await client.connect();
    debug("Connected successfully to server");
    const db = client.db(process.env.MONGO_DB);
    return db;
  } catch (e) {
    debug(e);
  }
};
const getCollection = async (collection) => {
  const db = await getClient();
  return db.collection(collection);
};

module.exports = { getCollection };

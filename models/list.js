const mongo = require("mongodb");
const { getCollection } = require("../services/mongo");

const collection = "list";

const dropList = async () => {
  const list = await getCollection(collection);
  return list.remove({});
};
const getAllList = async () => {
  const list = await getCollection(collection);
  return list.find({}).sort({ _id: -1 }).toArray();
};
const getList = async (id) => {
  const list = await getCollection(collection);
  const _id = new mongo.ObjectID(id);
  return list.findOne({ _id });
};
const addList = async (data) => {
  const list = await getCollection(collection);
  data.cards = [];
  const op = await list.insertOne(data);
  return op.insertedId;
};
const addCard = async (listId, data) => {
  const list = await getCollection(collection);
  const _id = new mongo.ObjectID(listId);
  data._id = new mongo.ObjectID();
  const op = await list.updateOne(
    {
      _id,
    },
    {
      $push: {
        cards: data,
      },
    }
  );
  return data._id;
};
module.exports = { getAllList, getList, addList, addCard, dropList };

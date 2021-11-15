const express = require("express");
const listCollection = require("../models/list");

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
  const lists = await listCollection.getAllList();
  res.json(lists);
});

router.post("/", async (req, res) => {
  const id = await listCollection.addList(req.body);
  res.json({ _id: id });
});

router.post("/:listId", async (req, res) => {
  const listId = req.params.listId;

  const _id = await listCollection.addCard(listId, req.body);
  res.json({_id});
});

module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Todo.findAll({}).then(todos => {
    res.json(todos);
  });
});

router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id
    }
  }).then(todo => {
    res.json(todo);
  });
});

router.post("/add", (req, res) => {
  db.Todo.create({
    text: req.body.text
  }).then(todo => {
    res.json(todo);
  });
});

router.put("/edit", (req, res) => {
  db.Todo.update(
    { text: req.body.text },
    { where: { id: req.body.id } }
  ).then(response => res.json(response));
});

router.delete("/remove/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(todo => {
    res.json(todo);
  });
});

module.exports = router;

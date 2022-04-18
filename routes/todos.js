const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

/* GET todos listing. */
router.get("/", async function (req, res, next) {
  try {
    const todos = await Todo.findAll({
      attributes: ["id", "Contents", "Done"],
    });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status = 504;
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  const content = req.body.content;
  const jane = await Todo.create({ Contents: content, Done: false });
  console.log(content);
  res.send();
});

router.put("/:id", async (req, res) => {
  const todoId = req.params.id;
  const content = req.body.content;
  const done = req.body.done;
  await Todo.update(
    { Contents: content, Done: done },
    {
      where: {
        id: todoId,
      },
    }
  );
  res.send();
});

router.delete("/:id", async (req, res) => {
  const todoId = req.params.id;
  Todo.destroy({
    where: {
      id: todoId,
    },
  });
  res.send();
});

module.exports = router;

const express = require("express");
const router = express.Router();

// get the category List
router.get("/:cat_id", (req, res) => {
  console.log("categories");
  getTasksByCategories(cat_id);
  res.render("categories");
});

// Editing a task
router.post("/:task_id", (req, res) => {
  //const newtask = editTask(req.body);
  res.send("categories");
});

//Deleting the task

//Editing the Task

module.exports = router;

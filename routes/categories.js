const express = require("express");
const router = express.Router();
const taskQueries = require('../db/queries/tasks');


// get the category List
router.get("/:cat_id", (req, res) => {
  console.log("categories",req.params.id);
  taskQueries.getTasksByCategory(req.params.id);
  res.render("categories");
});

// Editing a task
router.post("/:task_id", (req, res) => {
  //const newtask = editTask(req.body);
  res.send("categories");
});

//Deleting the task
router.post("/:task_id", (req, res) => {
  //const newtask = editTask(req.body);
  res.send("categories");
});

//Editing the Task

module.exports = router;

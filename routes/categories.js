const express = require("express");
const router = express.Router();
const taskQueries = require("../db/queries/tasks");
const { markComplete } = require("../db/queries/helper");
const {   categorizeTask,
      categorizeTasksByAPI } = require("../public/scripts/categorizeTask");

// get the category List
router.get("/:cat_id", (req, res) => {
  taskQueries.getTasksWithCategoryName(req.params.cat_id).then((tasks) => {
    if (tasks.length > 0) {
      res.render("categories", { tasks });
    } else {
      res.render("home");
    }
  });
});

// Editing a task
router.post("/updateTask/:task_id", (req, res) => {
  const newTitle = req.body.newTitle;
  const taskId =req.params.task_id;

  let cat_id = categorizeTask(newTitle);
  console.log('HERE',cat_id);
  if (!cat_id) {
    cat_id = categorizeTasksByAPI(newTitle);
    if (!cat_id){
      cat_id = 6;
    }
  }


  taskQueries.updateTaskTitleAndCatId(taskId, newTitle , cat_id)
    .then(task => {
      //task.cat_id = null;
      res.redirect(`/categories/${task.cat_id}`);
    })
});

//Mark the task completed
router.post("/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  // DB operation
  markComplete(taskId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});
module.exports = router;

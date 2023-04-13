const express = require("express");
const router = express.Router();
const { getTasks, getTaskByTitle } = require("../db/queries/tasks");
const { addTasks } = require("../db/queries/helper.js");

const {
  categorizeTask,
  categorizeTasksByAPI,
} = require("../public/scripts/categorizeTask.js");

const data = [
  { id: 1, text: "Hello There" },
  { id: 2, text: "Hello Ang" },
];

router.get("/", (req, res) => {
  //console.log("got home");
  res.render("home");
});

/* router.get('/new', (req, res) => {
  console.log('got home');
  res.send({data});
}); */

router.post("/", (req, res) => {
  //console.log("HELLO HOME!");
  res.render("home");
});

// Add new task
router.post("/new-task", (req, res) => {
  const task = req.body;
  //check if the category id is given else call categorize
  let cat_id = task.cat_id;
  console.log('LOG BODY', task);
  const title = task.title;
  console.log('CAT ID', cat_id);

  // categorize the task if cat_id is not provided
  if (!cat_id) {
    cat_id = categorizeTask(title);
    if (cat_id) {
      addTasks('1', cat_id, task.priority, task.title, task.task_due);
          res.redirect(`/home`);
          return;
    }
    console.log('INNER',cat_id);
    if (!cat_id ) {
      //  categorize with the help of API
      categorizeTasksByAPI(title).then(result => {


        const keywords = {
          1: ["televisionprogram", "movie"],
          2: ["restaurant"],
          3: ["book", "novel"],
          4: ["retaillocation", "financial"],
          5: ["expandedfood", "plant"],
        };

          if (result.success) {
          const datatypes = result.datatypes.split(',');

          datatypes.forEach((datatype) => {


            for (const value in keywords) {
              if (keywords[value].some((k) =>
                k.toLowerCase() === datatype.toLowerCase())) {
                  console.log(datatypes)
                  console.log("+++++value", value)
                cat_id = value;

              }
            }

          });


          // return cat_id;
        }
        if (cat_id===null) {
          cat_id = 6;
          console.log('assigning to 6',cat_id);
        }

        addTasks('1', cat_id, task.priority, task.title, task.task_due);
        res.redirect(`/home`);

        console.log('AFTER API',cat_id);
      })


      //set the category id to Unsorted in DB and "miscellaneous" front end

    }
  }

  //Insert the record into the DB

});

module.exports = router;

const express = require("express");
const router = express.Router();
const addTasks = require("../public/scripts/addtasks.js");

router.get("/", (req, res) => {
  console.log("got home");
  res.render("home");
});
router.post("/", (req, res) => {
  console.log("HELLO HOME!");
  res.render("home");
});

// Adding new tasks
router.post("/new", (req, res) => {
  const newtask = addTasks(req.body);
  res.send("Hello World");
});
module.exports = router;

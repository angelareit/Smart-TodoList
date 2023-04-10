const express = require('express');
const router  = express.Router();
const {getTasks} = require('../db/queries/tasks');

router.get('/', (req, res) => {
  console.log('got home');
  getTasks();
  res.render('home');
});
router.post('/', (req, res) => {
  console.log('HELLO HOME!');
  res.render('home');
});
module.exports = router;

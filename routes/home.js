const express = require('express');
const router = express.Router();
const { getTasks, getTaskByTitle } = require('../db/queries/tasks');

const data = [
  { id: 1, text: 'Hello There' },
  { id: 2, text: 'Hello Ang' },
];


router.get('/', (req, res) => {
  console.log('got home');
  
  res.render('home');
});

router.get('/new', (req, res) => {
  console.log('got home');
  /*   getTaskByTitle();
  */
  res.send({data});
});

router.post('/', (req, res) => {
  console.log('HELLO HOME!');
  res.render('home');
});
module.exports = router;

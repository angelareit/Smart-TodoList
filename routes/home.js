const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  console.log('got home');
  res.render('home');
});
router.post('/', (req, res) => {
  console.log('HELLO HOME!');
  res.render('home');
});
module.exports = router;

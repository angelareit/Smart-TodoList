const db = require('../connection');

const getTasksByCategory = (category_id) => {
  return db.query(`SELECT * FROM tasks WHERE cat_id = ${category_id};`)
    .then(data => {
      console.log('data:', data.rows)
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message)
    })
};

const getTasksByTitle = () => {
  return db.query('SELECT title FROM tasks;')
    .then(data => {
      console.log('data:', data.rows)

      return data.rows;
    })
    .catch((err) => {
        console.log(err.message)
      })
};

module.exports = { getTasksByCategory, getTasksByTitle };

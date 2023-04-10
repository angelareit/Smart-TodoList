const db = require('../connection');

const getTasks = () => {
  return db.query('SELECT * FROM tasks;')
    .then(data => {
      console.log('data:', data.rows)
      return data.rows;

    })
    .catch((err) => {
      console.log(err.message)
    })
};

const getTaskByTitle = () => {
  return db.query('SELECT title FROM tasks;')
    .then(data => {
      console.log('data:', data.rows)

      return data.rows;
    })
    .catch((err) => {
        console.log(err.message)
      })
};

module.exports = { getTasks, getTaskByTitle };

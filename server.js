const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Marta',
    password: 'martam',
    database: 'schedule'
});

const app = require('./app').default

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.message);
      return;
    }
    console.log("Database connection successful");
  });
  let sched = null;
  connection.query("SELECT * FROM lviv", (err, result) => {
    console.log(result);
    sched = result;
  });
console.log(sched);
  module.exports = {
    connection,
    sched
  };
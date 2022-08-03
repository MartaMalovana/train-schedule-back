const mysql = require('mysql2');
const express = require('express');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Marta',
    password: 'martam',
    database: 'schedule',
    // ssl: {
    //   rejectUnauthorized: false
    // }
});

const app = require('./app')

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.message);
      return;
    } else {
      console.log("Database connection successful");
      app.listen(3001, function(err){
        if (err) console.log("Error in server setup")
        console.log("Server listening on Port", 3001);
    });
    };
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
const express = require('express');
const mysql = require('mysql2');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.listen(3001, function(err) {
  if(err) console.log(err);
  console.log("connected on port 3001");
});

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Marta',
  password: 'martam',
  database: 'schedule',
});

app.use("/lviv", (req, res) => {
  connection.query("SELECT * FROM lviv", function (err, results, fields) { 
    if(err) throw new Error(err.message);
    res.send(results);
  }); 
});

app.use("/kyiv", (req, res) => {
  connection.query("SELECT * FROM kyiv", function (err, results, fields) { 
    if(err) throw new Error(err.message);
    res.send(results);
  }); 
});

app.use("/krakow", (req, res) => {
  connection.query("SELECT * FROM krakow", function (err, results, fields) { 
    if(err) throw new Error(err.message);
    res.send(results);
  }); 
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found this' })
})

app.use(({status = 500, message = "Server error"}, req, res, next) => {
  res.status(status).json({ message: message })
})

module.exports = {
  app
};
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000;
const logger = require('morgan');
const shell = require('shelljs')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(logger("dev"));

global.__basedir = __dirname

app.get("/", (req, res) => { 
    res.json({
      key: "I am value"
    });
});

app.post("/Price-Comparison", (req, res) => {
    console.log('hello I am ok, with working CI')
    shell.cd('../Price-Comparison');
    shell.exec('git pull origin master')
    shell.exec('npm i')
    res.json({
      key: "I am value 2"
    });
});


app.listen(port, function() {
    console.log("Server listening on port: ", port);
  })
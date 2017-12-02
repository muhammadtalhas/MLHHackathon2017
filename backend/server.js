
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var dbConnector = require('./dbConnector/dbConnector.js');
var dbConfig = require('./dbConnector/dbConfig.js');


app.use(bodyParser.urlencoded({extended: true}));

var db;
dbConfig.mongoClient.connect(dbConfig.mongoUrl, function (err, database) {
    if(err) {
        console.log("Ayo fam mongo not connecting rip\n\n");
    } else {
        db = database;
    }
});

const BASE_URL = '/api';


app.get(BASE_URL, function (req, res) {
    res.send('Sup BITCHES')
});

app.listen(3000, function () {
    console.log('Listening on :3000')
})
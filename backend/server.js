
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors')


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

var dbConnector = require('./dbConnector/dbConnector.js');
var dbConfig = require('./dbConnector/dbConfig.js');



var db;
dbConfig.mongoClient.connect(dbConfig.mongoUrl, function (err, database) {
    if(err) {
        console.log("Ayo fam mongo not connecting rip\n\n");
    } else {
        db = database;
        console.log("db is connected")
    }
});

const BASE_URL = '/api';


app.get(BASE_URL, function (req, res) {
    res.send('Sup BITCHES')
});

app.post(BASE_URL + '/register', function(req, res){
    var data = {
        username: String(req.body.username).trim().toLowerCase(),
        email: req.body.email,
        password: req.body.password,
        street_name: req.body.street_name,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip
    };
    console.log(data);
    if(data.username
        && data.email
        && data.password
        && data.street_name
        && data.city
        && data.state
        && data.zip){

        dbConnector.user.insertUser(db, data, function(err, response){
            if(err){
                res.send(err);
            }else{
                res.send(response)
            }
        })
    }else{
        res.send("Some data was missing")
    }
})

app.post(BASE_URL + '/login', function (req, res) {
    var data = {
        username: String(req.body.username).trim().toLowerCase(),
        password: req.body.password
    }
    if(data.username && data.password){
        dbConnector.user.login(db, data, function(err, response){
            if(err){
                res.send(err);
            }else{
                res.send(response)
            }
        })
    }
})

app.listen(8080, function () {
    console.log('Listening on :8080')
})
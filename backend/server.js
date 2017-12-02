
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var dbConnector = require('./dbConnector/dbConnector.js');
var dbConfig = require('./dbConnector/dbConfig.js');



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
    console.log(data)
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

app.listen(3000, function () {
    console.log('Listening on :3000')
})
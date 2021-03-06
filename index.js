var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var port = process.env.PORT || 3000;
var db;

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log('listening on port: ' + port)
});

/**
 * Connect to mongodb database. In production, the credientials would not be stored in plain text.
 */
MongoClient.connect('mongodb://solarcity:solarCity1@ds129260.mlab.com:29260/solar-city', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(4000, () => {
        console.log('db listening on 4000');
    });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/**
 * Post user info, which includes name, age, address, and reason for interest, to the DB.
 */
app.post('/submitUserInfo', function(req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var address = req.body.address;
    var interest = req.body.interest;

    // store info in db using name + address as the primary key.
    db.collection('userinfo').insert({"_id" : name + '_' + address, [name] : {"age":age, "address":address, "interest":interest}});

    console.log(req.body);
    res.redirect("/");
});

/**
 * Get user info from the DB using the user's name and address as the query.
 */
app.get('/getUserInfo', function(req, res) {
    var name = req.query.name;
    var address = req.query.address;

    db.collection('userinfo').findOne({"_id" : name + '_' + address}, function(err, doc) {
        if (doc) {
            res.send(name + "'s reason for interest in SolarCity: " + doc[name]['interest']);
        } else {
            if (err) console.log(err);
            res.send("No records for " + name + " were found.");
        }
    });
});

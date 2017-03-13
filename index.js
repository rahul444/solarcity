var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('listening on port: ' + port)
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
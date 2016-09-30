var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = config = require('./config/config.json');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(config.port, function () {
    console.log('Express server listening on ' + config.port);
});

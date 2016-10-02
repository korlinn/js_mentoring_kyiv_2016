var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var errorHandler = require('errorhandler');
var config = require('./config');

var mongoose = require('mongoose');
mongoose.Promise = require('Q').Promise;

mongoose.connect(config.get('db').url);
var db = mongoose.connection;

db.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

db.once('open', function(callback) {
    console.log("MongoDB connected successful");
});

var app = express();

app.set('port', config.get('port'));
app.set('views', './views/');
app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(app.get('port'), function () {
    console.log('Express server listening on ' + app.get('port'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

// app.use(function(err, req, res, next) {
//    if (app.get('env') === 'development') {
//        return errorHandler(err, req, res, next);
//    } else {
//        res.status(500).send('Something broke!');
//    }
// });
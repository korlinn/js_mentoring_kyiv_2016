var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var errorHandler = require('errorhandler');
var config = require('./config');

var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('./services/auth');

mongoose.Promise = require('Q').Promise;

mongoose.connect(config.get('db').url);
var db = mongoose.connection;

db.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

db.once('open', function(callback) {
    console.log('MongoDB connected');
});

var app = express();

app.set('port', config.get('port'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(app.get('port'), function () {
    console.log('Express server listening on ' + app.get('port'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);
auth.initialize();
app.use(auth.authenticate);

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
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var config = require('./config');
var api = require('./api');

var app = express();
//var router = express.Router();
app.set('port', config.get('port'));
app.set('views', './views/');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function () {
    console.log('Express server listening on ' + app.get('port'));
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(cookieParser);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/registration', function(req, res) {
    res.render('registration');
});

app.get('/welcome', function(req, res) {
    res.render('profile', {
        username: 'User'
    });
});

app.use(function(err, req, res, next) {
   if (app.get('env') === 'development') {
       var errorHandler = express.errorHandler();
       errorHandler(err, req, res, next);
   } else {
       res.status(500).send('Something broke!');
   }
});
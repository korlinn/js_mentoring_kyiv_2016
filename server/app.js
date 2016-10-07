'use strict';

const path = require('path');
const env= require('process-env');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

env.load('./.env');

const routes = require('./routes');

const sessionStore = new MongoStore({mongooseConnection: mongoose.connection});

mongoose.Promise = require('Q').Promise;

mongoose.connect(process.env.MONGOURI);
const db = mongoose.connection;

db.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

db.once('open', function(callback) {
    console.log('MongoDB connected');
});

const app = express();

app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false,
    maxAge: 8640000000000,
    store: sessionStore
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on ' + app.get('port'));
});

app.use(function(err, req, res, next) {
   if (app.get('env') === 'development') {
       return errorHandler(err, req, res, next);
   } else {
       res.status(500).send('Something broke!');
   }
});
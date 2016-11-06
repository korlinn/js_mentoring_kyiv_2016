'use strict';

const path = require('path');
const env= require('process-env');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const passport = require('passport');
const routes = require('./routes');
const mongodb = require('./bootstrap/mongodb');
const CONST = require('./common/const');

env.load('./.env');
mongodb.init(process.env.MONGOURI);

const app = express();

app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: false,
    maxAge: 8640000000000,
    store: mongodb.sessionStore
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.get('/main', function(req, res) {
    res.render('main');
});

// app.get('/angular*', function(req, res) {
//     res.redirect('/angular');
// });

app.listen(app.get('port'), function () {
    console.log('Express server listening on ' + app.get('port'));
});

app.use(function(err, req, res, next) {
    if (app.get('env') === 'development') {
        return errorHandler(err, req, res, next);
    } else {
        res.status(CONST.STATUS.SERVERERROR).send('Something broke!');
    }
});
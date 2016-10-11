'use strict';

const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const sessionStore = new MongoStore({mongooseConnection: mongoose.connection});

module.exports = {
    init,
    sessionStore
};

function init(URI) {
    mongoose.Promise = require('Q').Promise;

    mongoose.connect(URI);
    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    });

    db.once('open', () => { console.log('MongoDB connected'); });
}




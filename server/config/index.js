'use strict';

var nconf = require('nconf');
var path = require('path');

nconf
    .argv()
    .env()
    .file({ file: path.join(__dirname, 'config.json') });

module.exports = nconf;

// .npmrc.example
/**
 port=8080
 dbUrl=
 jwtSecret=EPAM-2016.foodadviser
 */
'use strict';

const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('../../config');
const User = require('../../routes/user/user.model');

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

module.exports = {
    initialize,
    authenticate
};

const params = {
    secretOrKey: config.get('jwt').secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

const strategy = new Strategy(params, function(payload, done) {
    User.findById(payload.id)
        .then(function(user) {
            if (result) {
                return done(null, { id: user._id });
            } else {
                return done(null, false, 'User unauthorized.');
            }

        })
        .catch(function(err) {
            return done(err);
        });
});

passport.use(strategy);

function initialize() {
    passport.initialize();
}

function authenticate(req, res, next) {
    // var token = (req.body && req.body.access_token)
    //     || (req.query && req.query.access_token)
    //     || req.headers['x-access-token'];
    //
    // if (token) {
    //     try {
    //         var decoded = jwt.decode(token, app.get('jwtTokenSecret'));
    //
    //     } catch (err) {
    //         return next();
    //     }
    // } else {
    //     next();
    // }

    passport.authenticate('jwt',( config.get('jwt').session));
    next();
}

// https://www.sitepoint.com/using-json-web-tokens-node-js/
// https://www.sitepoint.com/user-authentication-mean-stack/
// https://habrahabr.ru/post/201206/
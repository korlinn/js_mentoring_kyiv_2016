'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../routes/user/user.model');

const localAuth = passport.authenticate('local', {
    successRedirect : '/user',
    failureRedirect : '/user/login'
});

module.exports = {
    localAuth,
    authMiddleware
};

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
function (email, password, done) {
    User.findOne({email: email})
        .then(function (result) {
            if (result) {
                let user = new User(result._doc);

                if (user.checkPassword(password)) {
                    done(null, user._doc.email);
                } else {
                    done(null, false, {message: 'Incorrect password.'});
                }
            } else {
                return done(null, false, {message: 'Incorrect email.'});
            }
        })
        .catch(function (err) {
            return done(err);
        });
}));


passport.serializeUser(function(email, done) {
    done(null, email);
});

passport.deserializeUser(function(email, done) {
    User.findOne({ email: email })
        .then(function(result) {
            if (result) {
                let user = new User(result._doc);
                done(null, user);
            } else {
                done(null, false, { message: 'User not found.' });
            }
        })
        .catch(function(err) {
            return done(err);
        });
});

function authMiddleware(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401);
        res.redirect('/user/login');
    }
}



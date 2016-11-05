'use strict';

const User = require('./user.model');
const CONST = require('../../common/const');

module.exports = {
    renderAll,
    getAll,
    getById,
    getRegistrationForm,
    postRegistrationForm,
    getEditForm,
    putEditForm,
    deleteById,
    getLoginForm,
    logout
};

// Get and render all users
function renderAll(req, res) {
    return User.find(req.params)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.OK).render('users', { data: result });
            } else {
                res.status(CONST.STATUS.NOTFOUND).json({ message: 'Not found.'});
            }
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}
// Get all users
function getAll(req, res) {
    return User.find(req.params)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.OK).send(result);
            } else {
                res.status(CONST.STATUS.NOTFOUND).json({ message: 'Not found.'});
            }
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Get one user by id
function getById(req, res) {
    return User.findById(req.params.id)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.OK).render('profile', result);
            } else {
                res.status(CONST.STATUS.NOTFOUND).json({ message: 'User not found.' });
            }
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Get registration page
function getRegistrationForm(req, res) {
    return res.render('registration');
}

// Post new user
function postRegistrationForm(req, res, next) {
    return User.findOne({ email: req.body.email })
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.CONFLICT).send({ message: 'User already exist.'});
            } else {
                let newUser = new User(req.body);
                return newUser.save();
            }
        })
        .then(() => {
            next();
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Get edit profile page
function getEditForm(req, res) {
    return User.findById(req.params.id)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.OK).render('updateprofile', result);
            } else {
                res.status(CONST.STATUS.NOTFOUND).json({ message: 'User not found.' });
            }
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Update user by id
function putEditForm(req, res) {
    return User.findById(req.params.id)
        .then(result => {
            if (result) {
                let updatedUser = result._doc;

                for (let key in req.body) {
                    if (req.body.hasOwnProperty(key)) {
                        updatedUser.key = req.body[key];
                    }
                }

                return updatedUser.save();
            } else {
                res.status(CONST.STATUS.NOTFOUND).send({ message: 'User not found.'});
            }
        })
        .then(result => res.status(CONST.STATUS.OK).render('profile', result))
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Delete user by id
function deleteById(req, res) {
    return User.findById(req.params.id)
        .then(result => {
            if (result) {
                return User.remove({_id: req.params.id});
            } else {
                res.status(CONST.STATUS.NOTFOUND).send({ message: 'User not found.'});
            }
        })
        .then(result => res.status(CONST.STATUS.OK).json({ response: result }))
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Get Login page
function getLoginForm(req, res) {
    return res.render('login');
}

function logout(req, res) {
    req.logout();
    res.redirect('/');
}


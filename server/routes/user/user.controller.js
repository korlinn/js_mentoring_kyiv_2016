'use strict';

const User = require('./user.model');

const STATUS = {
    OK: 200,
    CREATED: 201,
    BADREQUEST: 404,
    UNAUTHORIZED: 401,
    NOTFOUND: 404,
    CONFLICT: 409,
    SERVERERROR: 500
};

module.exports = {
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

// Get all users
function getAll(req, res) {
    return User.find(req.params)
        .then(function(result) {
            if (result) {
                res.status(STATUS.OK).render('users', { data: result });
            } else {
                res.status(STATUS.NOTFOUND).json({ message: 'Not found.'});
            }
        })
        .catch(function(err) {
            res.status(STATUS.SERVERERROR).json(err);
        });
}

// Get one user by id
function getById(req, res) {
    return User.findById(req.params.id)
        .then(function (result) {
            if (result) {
                res.status(STATUS.OK).render('profile', result);
            } else {
                res.status(STATUS.NOTFOUND).json({message: 'User not found.'});
            }
        })
        .catch(function (err) {
            res.status(STATUS.SERVERERROR).json(err);
        });

}

// Get registration page
function getRegistrationForm(req, res) {
    return res.render('registration');
}

// Post new user
function postRegistrationForm(req, res) {
    return User.findOne({ email: req.body.email })
        .then(function(result) {
            if (result) {
                res.status(STATUS.CONFLICT).send({ message: 'User already exist.'});
            } else {
                let newUser = new User(req.body);
                return newUser.save();
            }
        })
        .then(function (result) {
            req.login(result._doc, function (err) {
                if (err) {
                    return next(err);
                }
                return res.status(STATUS.CREATED).redirect('/user/' + result._doc._id.toString());
            });
        })
        .catch(function (err) {
            res.send(err);
        });
}

// Get edit profile page
function getEditForm(req, res) {
    return User.findById(req.params.id)
        .then(function(result) {
            res.status(STATUS.OK).render('updateprofile', result);
        })
        .catch(function(err) {
            res.status(STATUS.NOTFOUND).json(err);
        });
}

// Update user by id
function putEditForm(req, res) {
    return User.findById(req.params.id)
        .then(function (result) {
            if (result) {
                let updatedUser = result._doc;

                for (let key in req.body) {
                    if (updatedUser.hasOwnProperty(key)) {
                        updatedUser.key = req.body[key];
                    }
                }

                return updatedUser.save();
            } else {
                res.status(STATUS.NOTFOUND).send({ message: 'User not found.'});
            }
        })
        .then(function (result) {
            res.status(STATUS.OK).render('profile', result);
        })
        .catch(function(err) {
            res.send(err);
        });
}

// Delete user by id
function deleteById(req, res) {
    return User.findById(req.params.id)
        .then(function(result) {
            if (result) {
                return User.remove({_id: req.params.id});
            } else {
                res.status(STATUS.NOTFOUND).send({ message: 'User not found.'});
            }
        })
        .then(function (result) {
            res.status(STATUS.OK).json({ response: result });
        })
        .catch(function(err) {
            res.send(err);
        });
}

// Get Login page
function getLoginForm(req, res) {
    return res.render('login');
}

function logout(req, res) {
    req.logout();
    res.redirect('/');
}


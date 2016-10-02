'use strict';

var User = require('./user.model');

var STATUS = {
    OK: 200,
    CREATED: 201,
    NOT_FOUND: 404
};

var exports = module.exports = {};

exports.get = function(req, res) {
    return User.find(req.params)
        .then(function (result) {
            res.status(STATUS.OK).json({
                status: 'success',
                total: result.length,
                responses: result
            });
        })
        .catch(function (err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};

exports.post = function(req, res) {
    var newUser = new User(req.body);
    return newUser.save()
        .then(function (result) {
            res.status(STATUS.CREATED).json({
                status: 'success',
                response: result
            });
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.put = function(req, res) {
    return User.findById(req.params.id)
        .then(function (modelInstance) {
            var updatedInstance = _lodash.extend(modelInstance, req.body);
            return updatedInstance.save();
        })
        .then(function (result) {
            res.status(STATUS.OK).json({
                status: 'success',
                response: result
            });
        })
        .catch(function (err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};

exports.delete = function(req, res) {
    return User.remove({_id: req.params.id})
        .then(function (result) {
            res.json({
                status: 'success',
                response: result
            });
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.getById = function(req, res) {
    return User.findById(req.params.id)
        .then(function (result) {
            res.status(STATUS.OK).json(result);
        })
        .catch(function (err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};


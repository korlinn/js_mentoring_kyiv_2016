'use strict';

var exports = module.exports = {};

exports.get = function(req, res) {
    res.render('login');
};

exports.post = function(req, res) {
    var params = req.body;
    res.send(params);
};
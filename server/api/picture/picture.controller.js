'use strict';

var gallery = require('./picture.model');

var exports = module.exports = {};

exports.get = function(req, res) {
    console.log('getPictures');
    gallery.getPictures(res.send.bind(res));
};

exports.post = function(req, res) {
    //var data = req.body;
    //data.url = fileName;
    console.log('insertPicture');
    gallery.insertPicture(data, res.end.bind(res));
};

exports.put = function(req, res) {
    console.log('updatePicture');
    gallery.updatePicture(data, res.end.bind(res));
};

exports.delete = function(req, res) {
    var data = req.body;
    console.log('deletePicture');
    gallery.deletePicture(data, res.send.bind(res));
    res.end();
};
'use strict';

var MongoClient = require('mongodb').MongoClient;
//var q = require('q');
var assert = require('assert');

var url = 'mongodb://localhost:27017/lisentia';

var exports = module.exports = {};


//function connect() {
//    MongoClient.connect(url, function(err, connectedBase) {
//            assert.equal(null, err);
//            console.log("Connected to  MongoDB");
//            db = connectedBase;
//            return db;
//        });
//}

//function getConnection(){
//    console.log("getConnection");
//    if (!db) {
//        console.log("tryConnection");
//        return MongoClient.connect(url, function(err, connectedBase) {
//                assert.equal(null, err);
//                console.log("Connected to  MongoDB");
//                db = connectedBase;
//            });
//    }
//    else {
//        return q.when(db)
//    }
//}

// exports.close = function(db) {
//     db.close();
// };

exports.insertPicture = function(obj) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('pictures').insertOne(obj);
        db.close();
    });
};

exports.updatePicture = function(oldObj, newObj, callback) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('pictures').updateOne(oldObj, { $set: newObj }, function(err, result) {
            assert.equal(err, null);

            if (typeof callback === 'function') {
                callback(result);
            }
        });
        db.close();
    });
};

exports.deletePicture = function(obj) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('pictures').deleteOne(obj, function(err, result) {
            assert.equal(err, null);

            if (typeof callback === 'function') {
                callback(result);
            }
        });
        db.close();
    });
};

exports.getPictures = function(callback) {
    console.log(1);
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log(2);
        db.collection('pictures').find({}).toArray(function(err, data) {
            console.log(3);
            assert.equal(err, null);
            console.log(data);

            if (typeof callback === 'function') {
                callback(data);
            }
        });
        db.close();
    });
};




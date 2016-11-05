'use strict';

const Product = require('./product.model');
const CONST = require('../../common/const');

module.exports = {
    getAll,
    find,
    postNew,
    update,
    deleteById
};

// Get all products
function getAll(req, res) {
    return Product.find(req.params)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.OK).send(result);
            } else {
                res.status(CONST.STATUS.NOTFOUND).json({ message: 'Not found.'});
            }
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Find product
function find(req, res) {
    let query = req.body;

    return Product.findOne(query)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.OK).send(result);
            } else {
                res.status(CONST.STATUS.NOTFOUND).json({ message: 'Product not found.' });
            }
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

// Post new product
function postNew(req, res, next) {
    let query = req.body;

    return Product.findOne(query)
        .then(result => {
            if (result) {
                res.status(CONST.STATUS.CONFLICT).send({ message: 'Product already exist.'});
            } else {
                let newProduct = new Product(req.body);
                return newProduct.save();
            }
        })
        .then(() => {
            next();
        })
        .catch(err => res.status(CONST.STATUS.SERVERERROR).json(err));
}

function update(req, res, next) {}

function deleteById(req, res, next) {}
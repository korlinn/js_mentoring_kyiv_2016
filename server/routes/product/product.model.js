'use strict';

const crypto = require('crypto');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    isCounatble: Boolean,
    weightOne: Number,
    protein: Number,
    fats: Number,
    carbohydrate: Number
}, {
    collection: 'products'
});

module.exports = mongoose.model('Product', ProductSchema);
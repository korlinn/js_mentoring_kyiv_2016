'use strict';

const express = require('express');
const router = express.Router();
const product = require('./product.controller');

module.exports = router;

router.get('/getAll', product.getAll);
router.get('/find', product.find);
router.post('/add', product.postNew);
router.put('/update/:id', product.update);
router.delete('/del/:id', product.deleteById);




'use strict';

const express = require('express');
const router = express.Router();
const user = require('./user.controller');

router.route('')
    .get(user.get)
    .post(user.post);

router.route('/:id')
    .get(user.getById)
    .put(user.put)
    .delete(user.delete);

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const user = require('./user.controller');

router.route('/')
    .get(user.get);

router.route('/new')
    .get(user.registration)
    .post(user.post);

router.route('/edit/:id')
    .get(user.edit)
    .put(user.put);

router.route('/del/:id')
    .delete(user.delete);

router.route('/:id')
    .get(user.getById);

module.exports = router;

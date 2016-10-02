'use strict';

const express = require('express');
const router = express.Router();
const login = require('./login.controller');

router.route('/')
    .get(login.get)
    .post(login.post);

module.exports = router;

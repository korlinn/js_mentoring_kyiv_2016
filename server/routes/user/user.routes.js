'use strict';

const express = require('express');
const router = express.Router();
const user = require('./user.controller');
const auth = require('../../services/auth');

module.exports = router;

router.get('/', user.getAll);

router.route('/login')
    .get(user.getLoginForm)
    .post(user.login);

router.get('/logout', user.logout);

router.route('/new')
    .get(user.getRegistrationForm)
    .post(user.postRegistrationForm);

router.get('/:id', user.getById);

//router.get('/edit/:id', user.getEditForm);
// router.put('/edit/:id', user.putEditForm);
// router.delete('/del/:id', user.deleteById);

router.get('/edit/:id', auth.authenticate, user.getEditForm);
router.put('/edit/:id', auth.authenticate, user.putEditForm);
router.delete('/del/:id', auth.authenticate, user.deleteById);



'use strict';

const express = require('express');
const router = express.Router();
const user = require('./user.controller');
const auth = require('../../services/auth/auth.local');

module.exports = router;

router.get('/login', user.getLoginForm);
router.post('/authenticate', auth.localAuth);
router.get('/authenticatedOk', user.successLogin);

router.get('/logout', user.logout);

router.get('/', auth.authMiddleware, user.renderAll);
router.get('/getAll', user.getAll);

router.get('/new', user.getRegistrationForm);
router.post('/register', user.postRegistrationForm, auth.localAuth);

router.get('/:id', auth.authMiddleware, user.getById);

router.get('/edit/:id', auth.authMiddleware, user.getEditForm);
router.put('/update/:id', auth.authMiddleware, user.updateUser);
router.put('/putedit/:id', auth.authMiddleware, user.putEditForm);
router.delete('/del/:id', auth.authMiddleware, user.deleteById);




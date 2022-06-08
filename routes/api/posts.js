const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', postsCtrl.create);
// POST /api/users/login

module.exports = router;
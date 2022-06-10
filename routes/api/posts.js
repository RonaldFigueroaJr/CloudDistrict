const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', postsCtrl.create);
// POST /api/users/login
router.get('/', postsCtrl.getAllPosts);

router.put('/:id', postsCtrl.updatePost);



module.exports = router;
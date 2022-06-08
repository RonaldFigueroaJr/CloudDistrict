const Post = require('../../models/post');

module.exports = {
  create,
};

async function create(req, res) {
  const post = await Post.create(req.body)
  res.json(post)
}


const Post = require('../../models/post');


module.exports = {
  create,
  getAllPosts,
  updatePost,
};

async function create(req, res) {
  const post = await Post.create(req.body)
  res.json(post)
}

async function getAllPosts(req, res) {
  const posts = await Post.find({})
  res.json(posts)
}

async function updatePost(req, res) {
  console.log(req.body);
  console.log(req.params._id);
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
  console.log(post);
}


const Post = require('../../models/post');


module.exports = {
  create,
  getAllPosts,
  updatePost,
  deletePost
};

async function create(req, res) {
  req.body.user = req.user._id;
  const post = await Post.create(req.body)
  res.json(post)
}

async function getAllPosts(req, res) {
  const posts = await Post.find({}).sort("-createdAt");
  res.json(posts)
}

async function updatePost(req, res) {
  console.log(req.body);
  console.log(req.params.id);
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
  res.json(post);
}

async function deletePost(req, res) {
  await Post.findOneAndDelete({_id: req.params.id, user: req.user._id});
  const posts = await Post.find({}).sort("-createdAt");
  res.json(posts);
}

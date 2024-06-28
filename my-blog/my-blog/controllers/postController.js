const { Post, User, Comment } = require('../models');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({ title, content, userId: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [User, Comment] });
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Implement updatePost and deletePost similarly
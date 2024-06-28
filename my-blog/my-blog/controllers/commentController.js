const { Comment, Post, User } = require('../models');

exports.createComment = async (req, res) => {
  const { content, postId } = req.body;
  try {
    const comment = await Comment.create({ content, userId: req.user.id, postId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { postId: req.params.postId }, include: [User] });
    res.json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//RECEBE TODOS OS POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts)
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

//ENVIA UM POST
router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    skill: req.body.skill,
    level: req.body.level,
  });
  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

//DEVOLVE UM POST ESPECÍFICO
router.get('/:postId'), (req,res) => {
    console.log(req.params.postId);
}

module.exports = router;
